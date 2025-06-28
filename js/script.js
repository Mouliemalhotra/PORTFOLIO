// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle")
const body = document.body

// Check for saved theme preference or default to dark theme
const currentTheme = localStorage.getItem("theme") || "dark"
body.classList.add(currentTheme + "-theme")

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme")
    body.classList.add("light-theme")
    localStorage.setItem("theme", "light")
  } else {
    body.classList.remove("light-theme")
    body.classList.add("dark-theme")
    localStorage.setItem("theme", "dark")
  }
})

// Loading Screen
const loadingScreen = document.getElementById("loadingScreen")
const loadingProgress = document.getElementById("loadingProgress")
const loadingPercentage = document.getElementById("loadingPercentage")

let progress = 0
const loadingInterval = setInterval(() => {
  progress += Math.random() * 15
  if (progress > 100) progress = 100

  loadingProgress.style.width = progress + "%"
  loadingPercentage.textContent = Math.floor(progress) + "%"

  if (progress >= 100) {
    clearInterval(loadingInterval)
    setTimeout(() => {
      loadingScreen.classList.add("hidden")
    }, 500)
  }
}, 100)

// Create floating particles for loading screen
function createLoadingParticles() {
  const particlesContainer = document.querySelector(".loading-particles")
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div")
    particle.style.position = "absolute"
    particle.style.width = Math.random() * 4 + 1 + "px"
    particle.style.height = particle.style.width
    particle.style.background = Math.random() > 0.5 ? "#00d4ff" : "#8b5cf6"
    particle.style.borderRadius = "50%"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.opacity = Math.random() * 0.6 + 0.2
    particle.style.animation = `floatParticle ${4 + Math.random() * 4}s ease-in-out infinite`
    particle.style.animationDelay = Math.random() * 4 + "s"
    particlesContainer.appendChild(particle)
  }
}

// Add particle animation keyframes
const style = document.createElement("style")
style.textContent = `
    @keyframes floatParticle {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        25% { transform: translateY(-20px) translateX(10px); }
        50% { transform: translateY(-40px) translateX(-10px); }
        75% { transform: translateY(-20px) translateX(5px); }
    }
`
document.head.appendChild(style)

createLoadingParticles()

// Navigation Active State
const navLinks = document.querySelectorAll(".nav-link")
const sections = document.querySelectorAll(".section, .hero")

function updateActiveNav() {
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active")
    }
  })
}

// Smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href")
    const targetSection = document.querySelector(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navbar background on scroll
const navbar = document.getElementById("navbar")
function updateNavbar() {
  if (window.scrollY > 50) {
    navbar.style.background = body.classList.contains("dark-theme")
      ? "rgba(10, 10, 10, 0.95)"
      : "rgba(255, 255, 255, 0.95)"
  } else {
    navbar.style.background = body.classList.contains("dark-theme")
      ? "rgba(10, 10, 10, 0.9)"
      : "rgba(255, 255, 255, 0.9)"
  }
}

// Name glow effect
const nameGlow = document.getElementById("nameGlow")
nameGlow.addEventListener("mouseenter", () => {
  nameGlow.style.textShadow =
    "0 0 20px var(--accent-primary), 0 0 40px var(--accent-primary), 0 0 60px var(--accent-primary)"
})

nameGlow.addEventListener("mouseleave", () => {
  nameGlow.style.textShadow = "none"
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")

      // Animate skill bars
      if (entry.target.classList.contains("skill-category")) {
        const skillBars = entry.target.querySelectorAll(".skill-progress")
        skillBars.forEach((bar) => {
          const width = bar.getAttribute("data-width")
          setTimeout(() => {
            bar.style.width = width
          }, 200)
        })
      }
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".skill-category, .project-card, .cert-card, .timeline-item, .contact-item, .stat-card",
  )
  animatedElements.forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })
})

// Scroll event listeners
window.addEventListener("scroll", () => {
  updateActiveNav()
  updateNavbar()
})

// Social link tooltips enhancement
const socialLinks = document.querySelectorAll(".social-link")
socialLinks.forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    const tooltip = link.getAttribute("data-tooltip")
    if (tooltip) {
      // Add glow effect
      link.style.boxShadow = "0 0 20px var(--accent-primary), 0 0 40px var(--accent-primary)"
    }
  })

  link.addEventListener("mouseleave", (e) => {
    link.style.boxShadow = "none"
  })
})

// Add floating animation to hero particles
function createHeroParticles() {
  const hero = document.querySelector(".hero")
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div")
    particle.style.position = "absolute"
    particle.style.width = Math.random() * 3 + 1 + "px"
    particle.style.height = particle.style.width
    particle.style.background = Math.random() > 0.5 ? "#00d4ff" : "#8b5cf6"
    particle.style.borderRadius = "50%"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.opacity = Math.random() * 0.4 + 0.1
    particle.style.animation = `floatHero ${6 + Math.random() * 4}s ease-in-out infinite`
    particle.style.animationDelay = Math.random() * 6 + "s"
    particle.style.pointerEvents = "none"
    particle.style.zIndex = "1"
    hero.appendChild(particle)
  }
}

// Add hero particle animation
const heroStyle = document.createElement("style")
heroStyle.textContent = `
    @keyframes floatHero {
        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        25% { transform: translateY(-30px) translateX(20px) rotate(90deg); }
        50% { transform: translateY(-60px) translateX(-20px) rotate(180deg); }
        75% { transform: translateY(-30px) translateX(10px) rotate(270deg); }
    }
`
document.head.appendChild(heroStyle)

// Initialize hero particles after loading
setTimeout(() => {
  createHeroParticles()
}, 3000)

// Add LED border pulse effect on scroll
function addLEDPulse() {
  const ledElements = document.querySelectorAll(".led-border")
  ledElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.animation = "ledPulse 2s ease-in-out infinite"
      element.style.animationDelay = index * 0.1 + "s"
    }, index * 100)
  })
}

// Trigger LED pulse when elements come into view
const ledObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "ledPulse 2s ease-in-out infinite"
      }
    })
  },
  { threshold: 0.5 },
)

document.addEventListener("DOMContentLoaded", () => {
  const ledElements = document.querySelectorAll(".led-border")
  ledElements.forEach((el) => {
    ledObserver.observe(el)
  })
})

// Performance optimization
let ticking = false
function requestTick() {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateActiveNav()
      updateNavbar()
      ticking = false
    })
    ticking = true
  }
}

window.addEventListener("scroll", requestTick)

// Preload critical resources
function preloadResources() {
  const criticalResources = ["./assets/moulie-photo.jpg", "./assets/Moulie_Malhotra_Resume.pdf"]

  criticalResources.forEach((resource) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.href = resource
    link.as = resource.includes(".jpg") ? "image" : "document"
    document.head.appendChild(link)
  })
}

preloadResources()

console.log("🚀 Portfolio loaded successfully!")
console.log("💼 Moulie Malhotra - AI/ML Developer")
console.log("📧 Contact: mouliemalhotra2004@gmail.com")

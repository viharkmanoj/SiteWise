import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import LoginView from "./LoginView";
import SignupView from "./SignupView";

import professionalsContent from "./professionals";
import contractorsContent from "./contractors";
import suppliersContent from "./suppliers";
import servicesContent from "./services";

export default function SiteWiseApp() {
  const [view, setView] = useState(() => {
  return localStorage.getItem("sitewise_view") || "home";
});
  const isInnerPage = 
  view === "professionals" ||
  view === "contractors" ||
  view === "suppliers" ||
  view === "services";
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [redirectAfterLogin, setRedirectAfterLogin] = useState(null);
  const [role, setRole] = useState(null);
  const [theme, setTheme] = useState("base");
  const [currentSlide, setCurrentSlide] = useState(() => {
  const saved = localStorage.getItem("sitewise_slide");
  return saved ? Number(saved) : 0;
});

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");


  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact1, setContact1] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, currentSlide]);

  useEffect(() => {
  localStorage.setItem("sitewise_view", view);
}, [view]);

useEffect(() => {
  localStorage.setItem("sitewise_slide", currentSlide);
}, [currentSlide]);

   const slides = [
    {
      key: "main",
      title: "SiteWise",
      bg: "/main.jpeg",
      buttonTarget: null, // no button on main slide
      bodyBeforeButton: `
  A construction project is never built by one person, and this platform exists to bring every essential mind and skill into one connected space. Here, architects share their visions, designers refine the experience, and engineers anchor every idea in precision and safety. Contractors and workers add strength through hands-on expertise, turning plans into structures that stand for decades. Suppliers contribute the materials and technologies that shape durability, aesthetics, and performance. Each professional becomes part of a larger ecosystem where communication flows, timelines tighten, and collaboration finally feels natural instead of fragmented. Whether you build, design, calculate, source, or craft, this space streamlines the way you work with others in the field. It’s a unified environment designed to make projects smoother, relationships stronger, and outcomes smarter. A place where every contributor can do their best work — together.
  `,
    },
    {
      key: "design",
      title: "Design",
      bg: "/sketch.png",
      buttonTarget: "professionals",
      bodyBeforeButton:
        "The architecture and interior design stage is where a project’s true character begins to emerge, transforming structural frameworks into meaningful spaces. During this phase, architects refine the exterior form, integrating materials, contours, and glazing that define the building’s visual identity. At the same time, interior designers shape the user experience from within, crafting layouts, lighting concepts, and finishing details that enhance comfort, clarity, and purpose. Every decision is guided by both function and aesthetic intention, ensuring that each space feels intuitive, cohesive, and aligned with the project’s original vision. As surfaces take form and environments begin to flow together, the building transitions from a construction site into a fully designed environment ready to support the people who will move through it—ultimately helping them ",
    },
    {
      key: "build",
      title: "Build",
      bg: "/underwork.png",
      buttonTarget: "contractors",
      bodyBeforeButton:
        "The contractor and engineering phase is where technical expertise meets hands-on execution, turning complex plans into stable, high-performing structures. Engineers provide the analytical backbone, shaping the building’s safety, systems, and structural integrity, while contractors coordinate the teams who bring those calculations and details to life on-site. Together, they manage everything from foundation work to mechanical installations, ensuring each component aligns with design standards, regulatory requirements, and practical site conditions. Their collaboration keeps the project precise, efficient, and adaptable, resolving challenges with informed, real-time decision-making. As the framework strengthens and systems fall into place, this combined leadership creates a seamless path toward completion—building environments where people can thrive, collaborate, and ",
    },
    {
      key: "solidify",
      title: "Solidify",
      bg: "/final.jpg",
      buttonTarget: "suppliers",
      bodyBeforeButton:
        "Suppliers play a vital role in shaping the quality and performance of a building, providing the materials and technologies that bring every design decision to life. From structural components to finishing elements, they ensure that each product meets the project’s technical requirements and aesthetic goals. Reliable sourcing, timely delivery, and material expertise are key, allowing the wider team to maintain momentum without compromise. Whether supplying glass, steel, flooring, lighting, or specialized systems, their contributions directly influence durability, sustainability, and the overall feel of the finished environment. As materials arrive and the project takes form, suppliers become trusted partners in maintaining consistency and excellence—quietly supporting the creation of spaces where people can connect, innovate, and ",
    },
    {
      key: "utilise",
      title: "Utilise",
      bg: "/garbage.png",
      buttonTarget: "services",
      bodyBeforeButton:
        "Service infrastructure forms the operational backbone of any building, supporting everything that keeps the environment functional, safe, and efficient. This includes essential daily services—waste management, mail handling, cleaning routes, and utility networks—working quietly in the background to ensure seamless flow. Alongside these, integrated emergency systems such as fire suppression, alarms, evacuation pathways, and monitoring networks are designed with equal importance, woven smoothly into the building’s layout to enhance safety without disrupting its aesthetic intent. Together, these systems create a reliable rhythm that supports occupants every day, balancing practicality with protection. As the building transitions from construction to full operation, these interconnected services become the foundation of comfort, continuity, and wellbeing—shaping spaces where people can work, interact, and ",
    },
  ];

  function handleSelectRole(r) {
    setRole(r);
    setTheme(r || "base");
  }

  function handleLoginSubmit(e) {
  e.preventDefault();
  const err = [];

  if (!email) err.push("Email is required");
  if (!password) err.push("Password is required");

  setErrors(err);

  if (err.length === 0) {
  setIsLoggedIn(true);

  if (redirectAfterLogin) {
    setView(redirectAfterLogin);
    setRedirectAfterLogin(null);
  } else {
    setView("home");
  }
}
}

 async function handleSignupSubmit(e, formData) {
  e.preventDefault();

  try {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch("http://localhost:5001/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (res.ok) {
      alert("Signup successful ✅");
      setView("login"); // optional redirect
    } else {
      alert(data.message || data.error);
    }

  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
}


  const morphVariants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

  const currentHomeSlide = slides[currentSlide];

  function renderCategory(title, items, targetView) {
    return (
      <motion.div
        variants={morphVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-[95%] mx-auto bg-black/40 rounded-[35px] p-10"
      >

        <h1 className="text-4xl mb-8">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((i, idx) => (
            <div
  key={idx}
  className="
    bg-white/10
    backdrop-blur-md
    rounded-3xl
    overflow-hidden
    border border-white/10
    transition-all duration-150
  
    hover:scale-[1.03]
    hover:shadow-xl hover:shadow-black/40
  "
>
  <img
    src={i.image}
    alt=""
    className="h-52 w-full object-cover rounded-t-3xl"
  />

  <div className="p-6">
  <h2 className="text-3xl font-semibold mb-3">
    {i.title}
  </h2>

  <p className="text-lg text-white/80 leading-relaxed">
  {i.desc}

  <button
  onClick={() => {
    if (isLoggedIn) {
      setView(targetView);
    } else {
      setRedirectAfterLogin(targetView);
      setView("login");
    }
  }}
    className="
      inline-block
      ml-2
      px-4 py-1.5
      text-sm font-medium
      rounded-full
      bg-blue-500/70
      text-white
      border border-blue-400/40
      backdrop-blur-sm
      align-middle
      transition-all duration-200
      hover:bg-blue-500
      hover:scale-80
      hover:shadow-lg hover:shadow-blue-500/40
    "
  >
    Meet them
  </button>
</p>

</div>

            </div>
          ))}
        </div>
      </motion.div>
    );
  }

 
 return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-30 h-[70px] bg-white/80 backdrop-blur-md flex items-center px-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-600/80" />
          <span className="text-xl font-semibold">SiteWise</span>
        </div>

        <div className="flex-1 px-8 flex items-center gap-4">

  {/* SEARCH SYSTEM */}
  <div className="flex items-center transition-all duration-500">

    {/* Search Bubble */}
    <button
      onClick={() => setSearchOpen(!searchOpen)}
      className="
        w-10 h-10
        rounded-full
        bg-white/10
        backdrop-blur-md
        border border-white/20
        flex items-center justify-center
        text-gray-800
        transition-all duration-300
        hover:bg-emerald-400/80
        hover:text-white
        hover:shadow-[0_0_25px_rgba(52,211,153,0.7)]
      "
    >
      🔍
    </button>

    {/* Expanding Input */}
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className={`
        ml-2
        px-4 py-2
        rounded-full
        bg-white/10
        backdrop-blur-md
        border border-white/20
        text-gray-800
        transition-all duration-500
        focus:outline-none
        ${searchOpen ? "w-[800px] opacity-100 ml-3" : "w-0 opacity-0 ml-0"}
        overflow-hidden
      `}
    />
  </div>

  {/* CATEGORY NAVIGATION */}
  {[
    { full: "Professional", short: "P", view: "professionals" },
    { full: "Contractor", short: "C", view: "contractors" },
    { full: "Supplier", short: "Su", view: "suppliers" },
    { full: "Service", short: "Se", view: "services" },
  ].map((item) => (
    <button
      key={item.view}
      onClick={() => setView(item.view)}
      className={`
        px-4 py-2
        rounded-full
        bg-white/10
        backdrop-blur-md
        border border-white/20
        text-gray-900 font-medium
        transition-all duration-300
        hover:bg-blue-500/80
        hover:text-white
        hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
      `}
    >
      {item.full}
    </button>
  ))}

  {isInnerPage && (
  <button
    onClick={() => setView("home")}
    className="
  px-4 py-2
  rounded-full
  bg-white/10
  backdrop-blur-md
  border border-white/20
  text-gray-900 font-medium
  transition-all duration-300
  hover:bg-white/30
  hover:text-gray-900
  hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]
  hover:scale-105
"
  >
    Back
  </button>
)}

</div>

  <div className="flex gap-4">
  <button
  onClick={() => {
    if (isLoggedIn) {
      setView("profile");   // 👈 goes to profile if already logged in
    } else {
      setView("login");     // 👈 normal login flow
    }
  }}
  className="
    px-5 py-2
    rounded-full
    bg-white/10
    backdrop-blur-md
    border border-white/20
    text-gray-900 font-medium
    transition-all duration-300
    hover:bg-emerald-500/80
    hover:text-white
    hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]
    hover:scale-105
  "
>
  {isLoggedIn ? "Profile" : "Log in"}
</button>

  <button
    onClick={() => setView("signup")}
    className="
      px-5 py-2
      rounded-full
      bg-white/10
      backdrop-blur-md
      border border-white/20
      text-gray-900 font-medium
      transition-all duration-300
      hover:bg-purple-600/80
      hover:text-white
      hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
      hover:scale-105
    "
  >
    Sign up
  </button>
</div>
      </header>

      <div className="pt-24 overflow-x-hidden relative">
        <AnimatePresence mode="wait">
  <motion.div
    key={view}
    variants={morphVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="w-full flex justify-center"
  >
    {/* HOME */}
    {view === "home" && (
      <motion.div
        className="w-[95%] min-h-[89vh] rounded-[40px] overflow-hidden relative"
      >
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${currentHomeSlide.bg})`,
            backgroundPosition: "60% center",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full">
          <div
            className="
              absolute
              left-24
              top-1/2
              -translate-y-1/2
              max-w-[1480px]
              bg-black/35
              backdrop-blur-md
              rounded-3xl
              p-10
            "
          >
            <h2 className="text-5xl font-semibold">
              {currentHomeSlide.title}
            </h2>

            <p className="text-xl whitespace-pre-line mt-6 leading-loose">
              {currentHomeSlide.bodyBeforeButton}

              {currentHomeSlide.buttonTarget && (
                <button
                  onClick={() => setView(currentHomeSlide.buttonTarget)}
                  className="
                    ml-0.5
                    px-3 
                    rounded-full
                    bg-blue-500/60
                    text-white
                    border border-blue-400/40
                    backdrop-blur-sm
                    transition-all duration-200
                    hover:bg-blue-500
                    hover:scale-105
                    hover:shadow-lg hover:shadow-blue-500/40
                  "
                >
                  meet the right people
                </button>
              )}
            </p>
          </div>
        </div>

        {currentSlide > 0 && (
          <button
            onClick={() => setCurrentSlide(currentSlide - 1)}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white text-3xl"
          >
            ‹
          </button>
        )}

        {currentSlide < slides.length - 1 && (
          <button
            onClick={() => setCurrentSlide(currentSlide + 1)}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white text-3xl"
          >
            ›
          </button>
        )}
      </motion.div>
    )}

    {/* CATEGORY PAGES */}
    {view === "professionals" && renderCategory("Professionals", professionalsContent, "professionals")}
    {view === "contractors" && renderCategory("Contractors", contractorsContent, "contractors")}
    {view === "suppliers" && renderCategory("Suppliers", suppliersContent, "suppliers")}
    {view === "services" && renderCategory("Services", servicesContent, "services")}

    {/* AUTH */}
    {view === "login" && (
      <LoginView
        view={view}
        setView={setView}
        setTheme={setTheme}
        setRole={setRole}
        setErrors={setErrors}
        handleSelectRole={handleSelectRole}
        handleLoginSubmit={handleLoginSubmit}
        role={role}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errors={errors}
        morphVariants={morphVariants}
      />
    )}

    {view === "signup" && (
      <SignupView
        view={view}
        setView={setView}
        setTheme={setTheme}
        setRole={setRole}
        role={role}
        setErrors={setErrors}
        handleSignupSubmit={handleSignupSubmit}
        firstName={firstName}
        setFirstName={setFirstName}
        middleName={middleName}
        setMiddleName={setMiddleName}
        lastName={lastName}
        setLastName={setLastName}
        contact1={contact1}
        setContact1={setContact1}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        errors={errors}
        morphVariants={morphVariants}
      />
    )}
  </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
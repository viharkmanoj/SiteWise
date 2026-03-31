import React from "react";
import { motion } from "framer-motion";
import { useCountryState } from "./useCountryState";

export default function SignupView(props) {
  const {
    view,
    setView,
    setTheme,
    setRole,
    errors,
    setErrors,
    handleSignupSubmit,
    morphVariants,
    role,
  } = props;

  // ✅ LOCAL STATE (no more undefined setters)
  const [clientType, setClientType] = React.useState("");
  const [workMode, setWorkMode] = React.useState("");
  const [businessName, setBusinessName] = React.useState("");
  const [websiteLink, setWebsiteLink] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [contact1, setContact1] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [landmark, setLandmark] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const {
    country,
    setCountry,
    state,
    setState,
    countries,
    stateList,
  } = useCountryState();

  if (view !== "signup") return null;

  return (
    <motion.div
      key="signup"
      variants={morphVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-[70%] min-w-[520px] bg-white/5 backdrop-blur-sm rounded-[28px] shadow-2xl p-8 mx-auto text-white"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-center flex-1">
          Create Account
        </h2>

        <div className="w-16" />
      </div>

      <form onSubmit={(e) => handleSignupSubmit(e, {
  firstName,
  middleName,
  lastName,
  contact1,
  email,
  address,
  city,
  zip,
  landmark,
  country,
  state,
  password,
  confirmPassword,
  role,
  clientType,
  workMode,
  businessName,
  websiteLink,
})}
 className="space-y-6">

  {/* NAME ROW */}
  <div className="flex gap-4">
    <div className="flex-1">
      <label className="block font-semibold text-white mb-1">
        First name <span className="text-red-500">*</span>
      </label>
      <input
        className="w-full p-3 rounded-md 
bg-white/10 
border border-white/30 
text-white 
placeholder-white/40
shadow-[0_0_12px_rgba(255,255,255,0.05)]
focus:outline-none 
focus:border-white/60 
focus:shadow-[0_0_18px_rgba(255,255,255,0.25)]
transition-all duration-300"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
    </div>

    <div className="flex-1">
      <label className="block font-semibold text-white mb-1">
        Middle name
      </label>
      <input
        className="w-full p-3 rounded-md 
bg-white/10 
border border-white/30 
text-white 
placeholder-white/40
shadow-[0_0_12px_rgba(255,255,255,0.05)]
focus:outline-none 
focus:border-white/60 
focus:shadow-[0_0_18px_rgba(255,255,255,0.25)]
transition-all duration-300"
        value={middleName}
        onChange={(e) => setMiddleName(e.target.value)}
      />
    </div>

    <div className="flex-1">
      <label className="block font-semibold text-white mb-1">
        Last name <span className="text-red-500">*</span>
      </label>
      <input
        className="w-full p-3 rounded-md 
bg-white/10 
border border-white/30 
text-white 
placeholder-white/40
shadow-[0_0_12px_rgba(255,255,255,0.05)]
focus:outline-none 
focus:border-white/60 
focus:shadow-[0_0_18px_rgba(255,255,255,0.25)]
transition-all duration-300"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
    </div>
  </div>

  {/* CONTACT + EMAIL */}
  <div className="flex gap-4">
    <div className="flex-1">
      <label className="block font-semibold text-white mb-1">
        Contact number <span className="text-red-500">*</span>
      </label>
      <input
        className="w-full p-3 rounded-md 
bg-white/10 
border border-white/30 
text-white 
placeholder-white/40
shadow-[0_0_12px_rgba(255,255,255,0.05)]
focus:outline-none 
focus:border-white/60 
focus:shadow-[0_0_18px_rgba(255,255,255,0.25)]
transition-all duration-300"
        value={contact1}
        onChange={(e) => setContact1(e.target.value)}
        required
      />
    </div>

    <div className="flex-[2]">
      <label className="block font-semibold text-white mb-1">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        className="w-full p-3 rounded-md 
bg-white/10 
border border-white/30 
text-white 
placeholder-white/40
shadow-[0_0_12px_rgba(255,255,255,0.05)]
focus:outline-none 
focus:border-white/60 
focus:shadow-[0_0_18px_rgba(255,255,255,0.25)]
transition-all duration-300"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
  </div>

  {/* PASSWORD */}
  <div>
  <label className="block font-semibold text-white mb-1">
    Create password <span className="text-red-500">*</span>
  </label>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      className="w-full p-3 pr-12 rounded-md 
      bg-white/10 
      border border-white/30 
      text-white 
      shadow-[0_0_12px_rgba(255,255,255,0.05)]
      focus:outline-none 
      focus:border-white/60 
      focus:shadow-[0_0_18px_rgba(255,255,255,0.25)]
      transition-all duration-300"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
    >
      {showPassword ? "🙈" : "👁"}
    </button>
  </div>

  <p className="text-xs text-white/50 mt-2">
    Must include uppercase, lowercase, number, special character, 8+ chars.
  </p>
</div>

  <div>
  <label className="block font-semibold text-white mb-1">
    Confirm password <span className="text-red-500">*</span>
  </label>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      className="w-full p-3 pr-12 rounded-md 
      bg-white/10 
      border border-white/30 
      text-white 
      shadow-[0_0_12px_rgba(255,255,255,0.05)]
      focus:outline-none 
      focus:border-white/60 
      focus:shadow-[0_0_18px_rgba(255,255,255,0.25)]
      transition-all duration-300"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      required
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
    >
      {showPassword ? "🙈" : "👁"}
    </button>
  </div>
</div>


  {/* ADDRESS */}
  <div>
    <label className="block font-semibold text-white mb-1">
      Address <span className="text-red-500">*</span>
    </label>
    <input
      className="w-full p-3 rounded-md 
bg-white/10 
border border-white/30 
text-white 
placeholder-white/40
shadow-[0_0_12px_rgba(255,255,255,0.05)]
focus:outline-none 
focus:border-white/60 
focus:shadow-[0_0_18px_rgba(255,255,255,0.25)]
transition-all duration-300"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      required
    />
  </div>

  {/* CITY / STATE / COUNTRY */}
  <div className="flex gap-4">
    <div className="flex-1">
      <label className="block font-semibold text-white mb-1">
        City <span className="text-red-500">*</span>
      </label>
      <input
  type="text"
  className="w-full p-3 rounded-md 
  bg-white/10 
  border border-white/30 
  text-white 
  placeholder-white/40
  shadow-[0_0_12px_rgba(255,255,255,0.05)]
  focus:outline-none 
  focus:border-white/60 
  focus:shadow-[0_0_18px_rgba(255,255,255,0.25)]
  transition-all duration-300"
  placeholder="City"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  required
/>
    </div>

    <div className="flex-1">
      <label className="block font-semibold text-white mb-1">
        State <span className="text-red-500">*</span>
      </label>
      <select
        className="w-full p-3 rounded-md 
bg-white/10 
border border-white/30 
text-white 
placeholder-white/40
shadow-[0_0_12px_rgba(255,255,255,0.05)]
focus:outline-none 
focus:border-white/60 
focus:shadow-[0_0_18px_rgba(255,255,255,0.25)]
transition-all duration-300"
        value={state}
        onChange={(e) => setState(e.target.value)}
        required
        disabled={!country}
      >
        <option value="">Select state</option>
        {stateList.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>

    <div className="flex-1">
      <label className="block font-semibold text-white mb-1">
        Country <span className="text-red-500">*</span>
      </label>
      <select
        className="w-full p-3 rounded-md 
bg-white/10 
border border-white/30 
text-white 
placeholder-white/40
shadow-[0_0_12px_rgba(255,255,255,0.05)]
focus:outline-none 
focus:border-white/60 
focus:shadow-[0_0_18px_rgba(255,255,255,0.25)]
transition-all duration-300"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
      >
        <option value="">Select country</option>
        {countries.map((c) => (
  <option key={c} value={c}>
    {c}
  </option>
))}
      </select>
    </div>
  </div>

  {/* ZIP + LANDMARK */}
  <div className="flex gap-4">
    <div className="w-1/4">
      <label className="block font-semibold text-white mb-1">
        ZIP / Postal code <span className="text-red-500">*</span>
      </label>
      <input
        className="w-full p-3 rounded-md 
bg-white/10 
border border-white/30 
text-white 
placeholder-white/40
shadow-[0_0_12px_rgba(255,255,255,0.05)]
focus:outline-none 
focus:border-white/60 
focus:shadow-[0_0_18px_rgba(255,255,255,0.25)]
transition-all duration-300"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        required
      />
    </div>

    <div className="flex-1">
      <label className="block font-semibold text-white mb-1">
        Landmark (optional)
      </label>
      <input
        className="w-full p-3 rounded-md 
bg-white/10 
border border-white/30 
text-white 
placeholder-white/40
shadow-[0_0_12px_rgba(255,255,255,0.05)]
focus:outline-none 
focus:border-white/60 
focus:shadow-[0_0_18px_rgba(255,255,255,0.25)]
transition-all duration-300"
        maxLength={100}
        value={landmark}
        onChange={(e) => setLandmark(e.target.value)}
      />
    </div>
  </div>

  {/* ERRORS */}
  {errors.length > 0 && (
    <div className="bg-rose-900/30 p-3 rounded">
      {errors.map((e, i) => (
        <div key={i} className="text-rose-300 text-sm">
          • {e}
        </div>
      ))}
    </div>
  )}

  <div className="flex justify-center gap-4 mb-8">
  {["Client", "Professional", "Contractor", "Supplier", "Service"].map((r) => (
    <button
      key={r}
      onClick={() => setRole(r)}
      className={`px-6 py-2 rounded-full transition-all duration-300 
      bg-purple-600 hover:bg-purple-500 text-white font-semibold
      ${role === r ? "ring-2 ring-white/60" : ""}`}
    >
      {r}
    </button>
  ))}
</div>

{role === "Client" && (
  <div className="space-y-4">
    <label className="block font-semibold text-white">
      What are you looking for?
    </label>

    <div className="space-y-2 text-white/80">
      {[
        "Personal projects",
        "Professional – large scale",
        "Professional – small scale",
        "Open to all",
      ].map((option) => (
        <label key={option} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="clientType"
            value={option}
            checked={clientType === option}
            onChange={(e) => setClientType(e.target.value)}
            className="accent-purple-500"
          />
          {option}
        </label>
      ))}
    </div>
  </div>
)}

{role &&
  ["Professional", "Contractor", "Supplier", "Service"].includes(role) && (
    <div className="space-y-6">

      {/* FIELD DROPDOWN */}
      <div>
        <label className="block font-semibold text-white mb-1">
          Field <span className="text-red-500">*</span>
        </label>
        <select
          className="w-full p-3 rounded-md 
bg-white/10 
border border-white/30 
text-white 
shadow-[0_0_12px_rgba(255,255,255,0.05)]
focus:outline-none 
focus:border-white/60 
focus:shadow-[0_0_18px_rgba(255,255,255,0.25)]
transition-all duration-300"
        >
          <option value="">Field</option>
        </select>
      </div>

      {/* WORK MODE */}
      <div className="space-y-3">
        <label className="block font-semibold text-white">
          How are you working?
        </label>

        <label className="flex items-center gap-2 cursor-pointer text-white/80">
          <input
            type="radio"
            name="workMode"
            value="Freelancer"
            checked={workMode === "Freelancer"}
            onChange={(e) => setWorkMode(e.target.value)}
            className="accent-purple-500"
          />
          Freelancer
        </label>

        <label className="flex items-center gap-2 cursor-pointer text-white/80">
          <input
            type="radio"
            name="workMode"
            value="Organisation"
            checked={workMode === "Organisation"}
            onChange={(e) => setWorkMode(e.target.value)}
            className="accent-purple-500"
          />
          Part of / Own an organisation / business
        </label>
      </div>

      {/* BUSINESS FIELDS */}
      {workMode === "Organisation" && (
        <div className="space-y-4">
          <input
            className="w-full p-3 rounded-md 
bg-white/10 
border border-white/30 
text-white 
placeholder-white/40
shadow-[0_0_12px_rgba(255,255,255,0.05)]
focus:outline-none 
focus:border-white/60 
focus:shadow-[0_0_18px_rgba(255,255,255,0.25)]
transition-all duration-300"
            placeholder="Name of the Business/Organisation"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />

          <input
            className="w-full p-3 rounded-md 
bg-white/10 
border border-white/30 
text-white 
placeholder-white/40
shadow-[0_0_12px_rgba(255,255,255,0.05)]
focus:outline-none 
focus:border-white/60 
focus:shadow-[0_0_18px_rgba(255,255,255,0.25)]
transition-all duration-300"
            placeholder="Link for the website"
            value={websiteLink}
            onChange={(e) => setWebsiteLink(e.target.value)}
          />
        </div>
      )}
    </div>
)}


  {/* BUTTONS */}
  <div className="flex gap-4">
    <button
      type="submit"
      className="px-6 py-3 rounded-md bg-rose-600 text-white"
    >
      Create account
    </button>

    <button
      type="button"
      onClick={() => {
        setView("login");
        setErrors([]);
      }}
      className="px-6 py-3 rounded-md bg-green border border-white/20"
    >
      Go to Login
    </button>
  </div>

</form>

    </motion.div>
  );
}

import { h } from 'preact';
import { signal } from '@preact/signals';
import { useState, useEffect } from 'preact/hooks';
import './index.scss';

const iconClasses = signal(["icon"]);

function addCheckToIcon() {
  if(iconClasses.value.includes("checked")) return;
  iconClasses.value = [...iconClasses.value, "checked"];
}
function removeCheckFromIcon() {
  iconClasses.value = iconClasses.value.filter(c => c !== "checked");
}

function ToggleTheme() {
  const [checked, setChecked] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialTheme = localStorage.getItem("html-theme");
    setChecked(initialTheme === "dark");
    if(initialTheme === "dark") {
      addCheckToIcon();
    }
    setLoading(false);
  }, [])

  function handleOnChange() {
    const root = document.documentElement;
    if(!checked) {
      root.setAttribute("html-dark-theme", "");
      localStorage.setItem("html-theme", "dark");
      addCheckToIcon();
    } else {
      root.removeAttribute("html-dark-theme");
      localStorage.setItem("html-theme", "light");
      removeCheckFromIcon();
    }
    setChecked(!checked);
  }

  if(loading) {
    return;
  }

  return (
    <label class="switch">
      <input type="checkbox" checked={checked} onChange={handleOnChange}/>
      <span class="slider"></span>
      <SVG icon={ checked ? "moon" : "sun" } className={iconClasses.value.join(" ")}/>
    </label>
  )
}

function SVG({ icon, className }) {
  // https://icon-sets.iconify.design/hugeicons/moon-02/
  if(icon === "moon") return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className}>
      <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.5 14.078A8.557 8.557 0 0 1 9.922 2.5C5.668 3.497 2.5 7.315 2.5 11.873a9.627 9.627 0 0 0 9.627 9.627c4.558 0 8.376-3.168 9.373-7.422"/>
    </svg>
  )
  // https://icon-sets.iconify.design/hugeicons/sun-03/
  if(icon === "sun") return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className}>
      <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0M12 2v1.5m0 17V22m7.07-2.929l-1.06-1.06M5.99 5.989L4.928 4.93M22 12h-1.5m-17 0H2m17.071-7.071l-1.06 1.06M5.99 18.011l-1.06 1.06"/>
    </svg>
  )
}

export default ToggleTheme;
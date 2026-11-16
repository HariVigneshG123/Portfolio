import React, { useEffect, useRef } from 'react';
import './TitleBar.css'

// Each id must match the id on the section's root element.
const NAV_ITEMS = [
  { label: 'Work', id: 'work' },
  { label: 'Education', id: 'education' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
  // { label: 'Timeline', id: 'timeline' },
];

export default function TitleBar() {
  const barRef = useRef(null);

  // The bar's height changes when links wrap onto a second line on small screens.
  // Publish the real height as --titlebar-height so the sticky sidebar and
  // section scroll offsets always line up with it.
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const root = document.documentElement;
    const update = () => root.style.setProperty('--titlebar-height', `${bar.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="TitleBar" ref={barRef}>
      {NAV_ITEMS.map(({ label, id }) => (
        <a key={id} className="TitleBarLink" href={`#${id}`}>
          {label}
        </a>
      ))}
    </nav>
  )
}

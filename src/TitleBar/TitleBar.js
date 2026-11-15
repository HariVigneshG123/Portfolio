import React from 'react';
import './TitleBar.css'

// Order is reversed on screen (flex-direction: row-reverse), so Work shows first.
// Each id must match the id on the section's root element.
const NAV_ITEMS = [
  // { label: 'Timeline', id: 'timeline' },
  { label: 'Contact', id: 'contact' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Work', id: 'work' },
];

export default function TitleBar() {
  return (
    <nav className="TitleBar">
      {NAV_ITEMS.map(({ label, id }) => (
        <a key={id} className="TitleBarLink" href={`#${id}`}>
          {label}
        </a>
      ))}
    </nav>
  )
}

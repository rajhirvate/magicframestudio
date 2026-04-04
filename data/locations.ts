export interface Location {
  slug: string;
  label: string;
  state: string;
}

export const locations: Location[] = [
  { slug: "mumbai",    label: "Mumbai",    state: "Maharashtra" },
  { slug: "pune",      label: "Pune",      state: "Maharashtra" },
  { slug: "delhi",     label: "Delhi",     state: "Delhi" },
  { slug: "bangalore", label: "Bangalore", state: "Karnataka" },
  { slug: "hyderabad", label: "Hyderabad", state: "Telangana" },
  { slug: "chennai",   label: "Chennai",   state: "Tamil Nadu" },
  { slug: "kolkata",   label: "Kolkata",   state: "West Bengal" },
  { slug: "ahmedabad", label: "Ahmedabad", state: "Gujarat" },
  { slug: "jaipur",    label: "Jaipur",    state: "Rajasthan" },
  { slug: "goa",       label: "Goa",       state: "Goa" },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

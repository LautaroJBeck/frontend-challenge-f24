const searchCourses = (query, courses) => {
  if (!query) return courses;

  const normalize = (s = "") =>
    s
      .toString()
      .toLowerCase()
      .normalize("NFKD")
      .replace(/\p{Diacritic}/gu, "");

  const q = normalize(query);

  return courses.filter((c) => {
    const haystack = `${c.dept} ${c.number} ${c.title} ${c.description}`;
    return normalize(haystack).includes(q);
  });
};
export default searchCourses;

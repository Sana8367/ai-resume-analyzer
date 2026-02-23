exports.calculateMatch = (resumeSkills, jobSkills) => {
  const resumeSet = new Set(resumeSkills.map(skill => skill.toLowerCase()));
  const jobSet = new Set(jobSkills.map(skill => skill.toLowerCase()));

  const matchedSkills = [];
  const missingSkills = [];

  jobSet.forEach(skill => {
    if (resumeSet.has(skill)) {
      matchedSkills.push(skill);
    } else {
      missingSkills.push(skill);
    }
  });

  const matchPercentage =
    (matchedSkills.length / jobSet.size) * 100;

  return {
    matchPercentage: Math.round(matchPercentage),
    matchedSkills,
    missingSkills,
  };
};
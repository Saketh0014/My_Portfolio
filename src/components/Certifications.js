import React from 'react';

const certifications = [
  {
    title: 'Full Stack Web Development using Python',
    issuer: 'AICTE',
    link: null,
  },
  {
    title: 'Python Programming Course',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/0d1d4599a643?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate',
  },
];

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>Certifications & Achievements</h2>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index}>
            {cert.title} – {cert.issuer}
            {cert.link && (
              <>
                {' '}
                - <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;

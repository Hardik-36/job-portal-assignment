CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  resume TEXT NOT NULL,
  email TEXT NOT NULL,
  contact TEXT NOT NULL,
  experience INT NOT NULL
);
CREATE TABLE IF NOT EXISTS user_skills(
  user_id INTEGER NOT NULL,
  skill TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id)
);
CREATE TABLE IF NOT EXISTS jobs(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS applications(
  job_id INTEGER NOT NULL,
  candidate_id INTEGER NOT NULL,
  status TEXT NOT NULL CHECK (
    status IN ('Under Review', 'Interview Scheduled')
  ),
  FOREIGN KEY(job_id) REFERENCES jobs(id),
  FOREIGN KEY(candidate_id) REFERENCES users(id)
);
CREATE TABLE IF NOT EXISTS assessments(
  job_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  FOREIGN KEY(job_id) REFERENCES jobs(id),
  FOREIGN KEY(question_id) REFERENCES questions(id)
);
CREATE TABLE IF NOT EXISTS questions(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question TEXT NOT NULL,
  A TEXT NOT NULL,
  B TEXT NOT NULL,
  C TEXT NOT NULL,
  D TEXT NOT NULL,
  answer CHAR NOT NULL
);
INSERT INTO jobs(title, description)
VALUES (
    'Frontend Developer',
    'Responsible for developing and maintaining the user interface of web applications.'
  ),
  (
    'Backend Developer',
    'Responsible for developing server-side logic and integration with databases.'
  ),
  (
    'UI/UX Designer',
    'Responsible for designing user interfaces and improving user experiences.'
  );
INSERT INTO users(
    name,
    resume,
    email,
    contact,
    experience
  )
VALUES (
    'Alice Johnson',
    'https://example.com/resumes/alice_johnson.pdf',
    'alice.johnson@example.com',
    '123-456-7890',
    3
  ),
  (
    'Bob Smith',
    'https://example.com/resumes/bob_smith.pdf',
    'bob.smith@example.com',
    '987-654-3210',
    2
  ),
  (
    'Charlie Brown',
    'https://example.com/resumes/charlie_brown.pdf',
    'charlie.brown@example.com',
    '555-123-4567',
    4
  ),
  (
    'Dana Lee',
    'https://example.com/resumes/dana_lee.pdf',
    'dana.lee@example.com',
    '111-222-3333',
    5
  );
INSERT INTO applications(job_id, candidate_id, status)
VALUES (1, 1, 'Under Review'),
  (1, 2, 'Interview Scheduled'),
  (2, 3, 'Under Review'),
  (3, 4, 'Under Review');
INSERT INTO user_skills(user_id, skill)
VALUES (1, 'JavaScript'),
  (1, 'CSS'),
  (2, 'React'),
  (2, 'HTML'),
  (2, 'CSS'),
  (3, 'Node.js'),
  (3, 'Express'),
  (3, 'MongoDB'),
  (4, 'Figma'),
  (4, 'Sketch'),
  (4, 'Adobe XD');
INSERT INTO questions(question, A, B, C, D, answer)
VALUES(
    'What is the virtual DOM in React?',
    'A real DOM structure',
    'A copy of the actual DOM',
    'JavaScript representation of the DOM',
    'None of the above',
    'C'
  ),
  (
    'Which of the following is a React hook?',
    'useFetch',
    'useEffect',
    'useAPI',
    'None of the above',
    'B'
  ),
  (
    'Which of the following is a React hook?',
    'useFetch',
    'useEffect',
    'useAPI',
    'None of the above',
    'B'
  ),
  (
    'What is middleware in Express?',
    'A function to handle errors',
    'A function that processes requests',
    'A type of database',
    'None of the above',
    'B'
  ),
  (
    'Which of the following is a NoSQL database?',
    'MySQL',
    'MongoDB',
    'PostgreSQL',
    'SQLite',
    'B'
  ),
  (
    'What is the primary goal of UX design?',
    'Create aesthetically pleasing visuals',
    'Maximize user satisfaction',
    'Ensure high performance',
    'Reduce development costs',
    'B'
  ),
  (
    'Which of the following tools is commonly used for UI/UX design?',
    'VS Code',
    'Figma',
    'Webpack',
    'None of the above',
    'B'
  );
INSERT INTO assessments(job_id, question_id)
VALUES (1, 1),
  (1, 2),
  (2, 3),
  (2, 4),
  (3, 5),
  (3, 6);
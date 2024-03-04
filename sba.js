const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};
console.log(CourseInfo);
// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};
console.log(AssignmentGroup);
// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];
console.log(LearnerSubmissions);

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0, // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833, // late: (140 - 15) / 150
    },
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);
console.log(getLearnerData);

// Your goal is to analyze and transform this data such that the
//  output of your program is an array of objects,
//  each containing the following information in the following format

let learnerScore = LearnerSubmissions[0].submission.score
console.log(learnerScore);
  for (let learnerScore = 0; learnerScore < (LearnerSubmissions[learnerScore].submission.score)
.length; learnerScore ++) {}

// Calculate the weighted average and assignment scores
const learners = {};
const points_possible = {
  1: 50, // Points possible for assignment 1
  2: 150, // Points possible for assignment 2
  3: 500, // Points possible for assignment 3
};

LearnerSubmissions.forEach((submission) => {
  const {
    learner_id,
    assignment_id,
    submission: { score },
  } = submission;
  if (!learners[learner_id]) {
    learners[learner_id] = {
      id: learner_id,
      totalScore: 0,
      totalWeight: 0,
      scores: {},
    };
  }

  learners[learner_id].totalScore += score;
  learners[learner_id].totalWeight += points_possible[assignment_id];
  learners[learner_id].scores[assignment_id] =
    (score / points_possible[assignment_id]) 
});

// Calculate the weighted average for each learner
const learnerData = Object.values(learners).map((learner) => {
  let avg = (learner.totalScore / learner.totalWeight);

  return {
    id: learner.id,
    avg,
    ...learner.scores,
  };
});

console.log(learnerData);

// You should also account for potential errors in the data that your program receives.
//  What if points_possible is 0? You cannot divide by zero.
//   What if a value that you are expecting to be a number is instead a string? 
// Use try/catch and other logic to handle these types of errors gracefully.

function asignmentIdauthentication(assignmentGroup, courseInfo) {
  if (assignmentGroup.course_id != courseInfo.id) {
   throw new Error('Program Failed..... Course ID not present in Course Info Data. Please check.');
  } else {
   
  }
 }

 //Calculate avarage for given assignment id.
 function avarage(score, points_possible, due_at, submitted_at) {
  let data = 0;
  if (isNaN(score) || isNaN(points_possible)) {
   throw new Error('Score and points_possible must be numbers only ');
  }
  if (points_possible == 0) {
   throw new Error('Points Possible can not be 0. Please check the input data');
  }
  score = points_possible - reducedPionts(due_at, submitted_at);
  try {
   data = points_possible / totalScore;
  } catch (error) {
   console.error(error);
  }
  return data;
 }

// If an assignment is not yet due, do not include it in the results or the average.
// Additionally, if the learner’s submission is late (submitted_at is past due_at),
// deduct 10 percent of the total points possible from their score for that assignment.


function calculatesubmissionDueDate(duaDate, submittedDate) {

    // Exclude assignments that are not yet due
    if (submittedDate > duaDate) {
      return 10;
    }else{
      return 0;
    }
      // Deduct 10% for late submissions
  
 
    }


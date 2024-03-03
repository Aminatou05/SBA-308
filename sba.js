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

console.log(result);
console.log(getLearnerData);
// /   data such that the output of your program is an array of objects,
//   each containing the following information in the following format:

// console.log(LearnerSubmissions[0].submission.score);
// const learnerData = {
//   id: LearnerSubmissions[0].learner_id,
//   avg:
//     LearnerSubmissions[0].submission.score /
//     AssignmentGroup.assignments[0].points_possible,
// };
//   Your goal is to analyze and transform this
// /

// console.log(learnerData);

// const learnersData = [

// let learnerScore = LearnerSubmissions[0].submission.score
// console.log(learnerScore);
//   for (let learnerScore = 0; learnerScore < (LearnerSubmissions[learnerScore].submission.score)
// .length; learnerScore ++) {}

// Calculate the weighted average and assignment scores
const learners = {};
const pointsPossible = {
  1: 50, // Points possible for assignment 1
  2: 150, // Points possible for assignment 2
  3: 500, // Points possible for assignment 3
};
try {
  // Code that may throw an exception
} catch (error) {
  // Code to handle the error
} finally {
  // Code to run irrespective of error
}
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
  learners[learner_id].totalWeight += pointsPossible[assignment_id];
  learners[learner_id].scores[assignment_id] =
    (score / pointsPossible[assignment_id]) * 100;
});

// Calculate the weighted average for each learner
const transformedData = Object.values(learners).map((learner) => {
  let avg = (learner.totalScore / learner.totalWeight) * 100;

  return {
    id: learner.id,
    avg,
    ...learner.scores,
  };
});

console.log(transformedData);

// If an assignment is not yet due, do not include it in the results or the average.
// Additionally, if the learner’s submission is late (submitted_at is past due_at),
// deduct 10 percent of the total points possible from their score for that assignment.


function calculatesubmissionlateScore(assignments) {
  let totalPoints = 0;

  for (let assignment of assignments) {
    const { due_at, submitted_at, points_possible } = assignment;

    // Exclude assignments that are not yet due
    if (due_at && new Date() >= new Date(due_at)) {
      const timeDifference = new Date(submitted_at) - new Date(due_at);

      // Deduct 10% for late submissions
      const latePenalty = timeDifference > 0 ? 0.1 * points_possible : 0;

      // Update total points 
      totalPoints += Math.max(0, points_possible - latePenalty);
     
    }
  }
}
const assignments = [
  {
    due_at: "3156-11-15T23:59:59",
    submitted_at: "2023-03-07T10:00:00",
    points_possible: 500,
  },
  {
    due_at: "2023-02-27T23:59:59",
    submitted_at: "2023-01-24T09:00:00",
    points_possible: 150,
  },
  {
    due_at: "2023-01-25T23:59:59",
    submitted_at: "2023-04-24T09:00:00",
    points_possible: 50,
  },
];
console.log(calculatesubmissionlateScore, pointsPossible);

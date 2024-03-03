const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

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
// .length; learnerScore ++) {
   
//     }

//     let learnerScore = LearnerSubmissions[0].submission.score;
// console.log(learnerScore);
// for (let i = 0; i < learnerScore.length; i++) {
//     // Your code logic here...
// }
//     let assignmentKeys = Object.keys(learner.assignments);
//     const totalScore = assignmentKeys.reduce((sum, key) => {
//       let { score, points_possible } = learner.assignments[key];
//       return sum + score / points_possible;
//     }, 0);
//     const weightedAverage = (totalScore / totalPointsPossible) * 100;

//   return {
//     id: learner.id,

//     avg: weightedAverage,
//     ...learner.assignments,
//   };


// console.log(learnersWithAverages);

  



   
//     assignments: {
//       assignment1: { score: 39, points_possible: 50 },
//       assignment2: { score: 140, points_possible: 150 },
//     },
//   },
  
// ];
   

// Calculate weighted average for each learner

// const learnersWithAverages = learnersData.map((learner) => {

 
//   const totalPointsPossible = assignmentKeys.reduce((sum, key) => {
//     let { points_possible } = learner.assignments[key];
//     return sum + points_possible;
//   }, 0);
  
 

  

// //////////////////////////////////

// function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmission) {
//     // Your implementation here...
//     // You can process the input parameters and create the desired output format.
//     // For example:
//     const formattedResult = [];

//     // Create an object for each learner submission
//     LearnerSubmission.forEach((submission) => {
//         const learnerData = {
//             course: CourseInfo.courseName,
//             assignmentGroup: AssignmentGroup,
//             submissionDate: submission.date,
//             grade: submission.grade,
//         };
//         formattedResult.push(learnerData);
//     });

//     return formattedResult;
// }
////////////////////////////////////////////////////////


  
  // Calculate the weighted average and assignment scores
  const learners = {};
  const pointsPossible = {
    1: 100, // Points possible for assignment 1
    2: 200, // Points possible for assignment 2
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
    const { learner_id, assignment_id, submission: { score } } = submission;
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
    learners[learner_id].scores[assignment_id] = (score / pointsPossible[assignment_id]) * 100;
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
  
//   const myArray = ["Hello", "World"];
// for (const element of myArray) {
//     console.log(element);
// }
////////////////////////////////////

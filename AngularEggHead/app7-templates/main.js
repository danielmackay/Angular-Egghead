var app = angular.module("myApp", []);
app.controller("PersonCtrl", function ($scope) {
    $scope.people = [
        new Person("Henry", "Jacob", "Mendocino", "M"),
        new Person("Ann", "Cecilla", "Negro", "F"),
        new Person("Berta", "Ann", "Sallyfield", "F"),
        new Person("Rudof", "John", "Waters", "M"),
        new Person("Ken", "Adam", "Audry", "M")
    ];
});

function Person(first, middle, last, gender) {
    this.first = first;
    this.middle = middle;
    this.last = last;
    this.gender = gender;
}

app.controller("QuestionCtrl", function ($scope) {
    $scope.questions = [
        new Question(1, "How old are you?", "number"),
        new Question(2, "Your date of birth?", "date"),
        new Question(3, "Describe yourself in a few words", "text"),
        new Question(4, "Which is your favorite color?", "singleOption"),
        new Question(5, "Which of the following sweets do you like?", "multiOption")
    ];
});

function Question(number, question, type) {
    this.number = number;
    this.question = question;
    this.type = type;
}

app.controller("TreeCtrl", function ($scope) {
    $scope.tree = [
        {
            name: "Parent 1",
            children: [
                {
                    name: "Child 1.1",
                    children: [
                        { name: "Grandchild 1.1.1" },
                        { name: "Grandchild 1.1.2" },
                        { name: "Grandchild 1.1.3" }
                    ]
                },
                { name: "Child 1.2" },
                { name: "Child 1.3" }
            ]
        },
        {
            name: "Parent 2",
            children: [
                { name: "Child 2.1" },
                { name: "Child 2.2" },
                { name: "Child 2.3" }
            ]
        },
        { name: "Parent 3" },
        { name: "Parent 4" },
        { name: "Parent 5" }
    ];
});


app.factory('getCardService', function() {
    return {
        getWord: function() {
                    var arrayLen = $scope.vocabArray.length;
                    var randomIndex = Math.floor(Math.random() * arrayLen);
                    var newWord = $scope.vocabArray[randomIndex];
                    $scope.vocabArray.splice(randomIndex, 1);
                    $scope.vaLength = $scope.vocabArray.length;
                    return newWord;
        },
        nextWord: function() {
                    $scope.currentWord = new Word($scope.getWord());
        },
        getAnswers: function() {
                    $scope.currentAnswers = [];
                    var correctAnswer = $scope.currentWord.def;
                    $scope.currentAnswers.push(correctAnswer);

                    for(i = 0; i < 4; i++) {
                        var randomInt = Math.floor(Math.random() * $scope.allAnswers.length);
                        //logic to make sure there are no duplicate answers
                        if($scope.currentAnswers.indexOf($scope.allAnswers[randomInt]) == -1 && $scope.currentAnswers.indexOf($scope.allAnswers
                            [randomInt]) != correctAnswer) {
                            $scope.currentAnswers.push($scope.allAnswers[randomInt]);
                        } else {
                            i -= 1;
                        };
                    }
                    $scope.currentAnswers.shift();
                    var answerIndex = Math.floor(Math.random() * 4);
                    $scope.currentAnswers.splice(answerIndex, 0, correctAnswer);
                }
    }
});

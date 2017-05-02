var app = angular
                .module("myModule",[])
                .controller("mainController", function($scope) {
                    var model = [{
                        id: 1,
                        word: 'apostate',
                        definition: 'Person who deserts a party, cause, religion, etc.',
                        pos: ['noun', 'adj']
                    },
                    {
                        id: 2,
                        word: 'antithetical',
                        definition: 'Directly opposed, opposite; involving anithesis (the rhetorical act of placing two phrases opposite one another for contrast, as in love me or hate me',
                        pos: ['adj']
                    },
                    {
                        id: 3,
                        word: 'antedate',
                        definition: 'Be older than, precede in time; assign to an earlier date',
                        pos: ['verb']
                    },
                    {
                        id: 4,
                        word: 'anodyne',
                        definition: 'Medicine that relieves pain (noun); soothing, relieving pain (adj)',
                        pos: ['noun', 'adj']
                    },
                    {
                        id: 5,
                        word: 'annul',
                        definition: 'Make void or null, cancel, abolish (usually of laws or other established rules)',
                        pos: ['verb']
                    },
                    {
                        id: 6,
                        word: 'analgesia',
                        definition: 'Pain relief; inability to feel pain',
                        pos: ['noun']
                    },
                    {
                        id: 7,
                        word: 'anachronism',
                        definition: 'Something that is not in its correct historical time; a mistake in chronology, such as by assigning a person or event to the wrong time period',
                        pos: ['noun']
                    },
                    {
                        id: 8,
                        word: 'ameliorate',
                        definition: 'Improve; make better or more bearable',
                        pos: ['verb']
                    },
                    {
                        id: 9,
                        word: 'amalgamate',
                        definition: 'Blend, merge, or unite',
                        pos: ['verb']
                    },
                    {
                        id: 10,
                        word: 'aloof',
                        definition: 'Distant physically or emotionally; reserved; indifferent',
                        pos: ['adj']
                    },
                    {
                        id: 11,
                        word: 'albeit',
                        definition: 'Although, even though',
                        pos: ['conjunction']
                    },
                    {
                        id: 12,
                        word: 'aerie',
                        definition: 'Dwelling or fortress built on a high place; the nest of a bird of prey, such as an eagle or hawk, built on a mountain or cliff',
                        pos: ['noun']
                    }
                ];

                $scope.currentWord = {};

                $scope.vocabArray = [];


                var Word = function(data) {
                    this.word = data.word;
                    this.pos = data.pos;
                    this.def = data.definition;
                    this.id = data.id;
                };

                for(i = 0; i < model.length; i++) {
                    $scope.vocabArray.push(model[i]);
                };

                for(i = 0; i < model.length; i++) {
                    $scope.allAnswerArray.push(model[i].definition);
                };




        });

export const formData = {
    "institude_id": {
        "$oid": "644bcd9694cc355ab53f3433"
    },
    "title": "The Gooogle",
    "img":"this.jpg",
    "description": "the description",
    "formMakerEmail": "hariah@gamil.com",
    "questions": [
        {
            "queMsg": "what is the Ai ?",
            "answers": [
                {
                    "value": "machine",
                    "correct": false,
                    "_id": {
                        "$oid": "644c0eb42ffed811a293ed4b"
                    }
                },
                {
                    "value": "human",
                    "correct": false,
                    "_id": {
                        "$oid": "644c0eb42ffed811a293ed4c"
                    }
                },
                {
                    "value": "computer",
                    "correct": false,
                    "_id": {
                        "$oid": "644c0eb42ffed811a293ed4d"
                    }
                },
                {
                    "value": "Artificial Intallignce",
                    "correct": true,
                    "_id": {
                        "$oid": "644c0eb42ffed811a293ed4e"
                    }
                }
            ],
            "_id": {
                "$oid": "644c0eb42ffed811a293ed4a"
            }
        },
        {
            "queMsg": "What is full form of OK ?",
            "answers": [
                {
                    "value": "O cool",
                    "correct": false,
                    "_id": {
                        "$oid": "644c0eb42ffed811a293ed50"
                    }
                },
                {
                    "value": "all Right",
                    "correct": true,
                    "_id": {
                        "$oid": "644c0eb42ffed811a293ed51"
                    }
                },
                {
                    "value": "o noo",
                    "correct": false,
                    "_id": {
                        "$oid": "644c0eb42ffed811a293ed52"
                    }
                },
                {
                    "value": "O yaa",
                    "correct": false,
                    "_id": {
                        "$oid": "644c0eb42ffed811a293ed53"
                    }
                }
            ],
            "_id": {
                "$oid": "644c0eb42ffed811a293ed4f"
            }
        },
        {
            "queMsg": "where you from ?",
            "answers": [
                {
                    "value": "home",
                    "correct": true,
                    "_id": {
                        "$oid": "644c0eb42ffed811a293ed55"
                    }
                },
                {
                    "value": "school",
                    "correct": false,
                    "_id": {
                        "$oid": "644c0eb42ffed811a293ed56"
                    }
                },
                {
                    "value": "college",
                    "correct": false,
                    "_id": {
                        "$oid": "644c0eb42ffed811a293ed57"
                    }
                },
                {
                    "value": "room",
                    "correct": false,
                    "_id": {
                        "$oid": "644c0eb42ffed811a293ed58"
                    }
                }
            ],
            "_id": {
                "$oid": "644c0eb42ffed811a293ed54"
            }
        }
    ],
    "date": {
        "$date": "2023-04-28T18:21:40.577Z"
    },
    "__v": 0
}

export const formResponce = {
    "_id": {
      "$oid": "644cc87bf50073e3a221e22c"
    },
    "user_id": {
      "$oid": "644b66e6e35a181d00a275f2"
    },
    "formId": {
      "$oid": "644c0eb42ffed811a293ed49"
    },
    "solved": [
      {
        "question_id": {
          "$oid": "644c0eb42ffed811a293ed4a"
        },
        "choose_id": {
          "$oid": "644c0eb42ffed811a293ed4e"
        },
        "_id": {
          "$oid": "644cc87bf50073e3a221e22d"
        }
      },
      {
        "question_id": {
          "$oid": "644c0eb42ffed811a293ed54"
        },
        "choose_id": {
          "$oid": "644c0eb42ffed811a293ed57"
        },
        "_id": {
          "$oid": "644cc87bf50073e3a221e22e"
        }
      },
      {
        "question_id": {
          "$oid": "644c0eb42ffed811a293ed4f"
        },
        "choose_id": {
          "$oid": "644c0eb42ffed811a293ed51"
        },
        "_id": {
          "$oid": "644cc87bf50073e3a221e22f"
        }
      }
    ],
    "score": 66.6667,
    "__v": 0
  }


export const MenuTabs = {
    title: "This is our Features",
    features: [
        {
            title: "Teachers Teams",
            path: "/teachers", //for view all teachers
            actionPath: [
                {
                    name: "add",
                    path: "/teachers/addteacher"
                },
                {
                    name: "update",
                    path: "/teachers/updateteacher/:id"
                },
                {
                    name: "delete",
                    path: "/teachers/deleteteacher/:id"
                },
            ],
        },

        {
            title: "forms",
            path: "/forms",
            actionPath: [
                {
                    name: "create",
                    path: "/forms/create"
                },
                {
                    name: "updateform",
                    path: "/forms/editform/:id"
                },
                {
                    name: "deleteform",
                    path: "/forms/deleteform/:id"
                },
            ]
        },
        {
            title: "formResponces",
            path: "/responcesform",
            actionPath: [
                {
                    name: "addresponce",
                    path: "/responcesform/addresponces"
                },
                {
                    name: "result For Institutor",
                    path: "/responcesform/instituteresult/:id"
                },
                {
                    name: "result for User",
                    path: "/responcesform/userresult/:id"
                },
            ]
        },
        {
            title: "formResponces",
            path: "/responcesform",
            actionPath: [
                {
                    name: "addresponce",
                    path: "/responcesform/addresponces"
                },
                {
                    name: "result For Institutor",
                    path: "/responcesform/instituteresult/:id"
                },
                {
                    name: "result for User",
                    path: "/responcesform/userresult/:id"
                },
            ]
        }




    ]

}


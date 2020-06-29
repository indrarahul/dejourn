import { User, Stand, ExploreThread } from './models';

export class Model {


    public static U: User[] = [
        {
            id: "u0",
            name: "Rahul Indra",
            imgUrl: "https://scriptly.org/wp-content/uploads/2016/06/opulent-profile-square-07.jpg",
        },

        {
            id: "u1",
            name: "Swastika Sen",
            imgUrl: "https://scriptly.org/wp-content/uploads/2016/06/opulent-profile-square-01.jpg",
        },

        {
            id: "u2",
            name: "Kaushalya Kishor",
            imgUrl: "https://scriptly.org/wp-content/uploads/2016/06/opulent-profile-square-02.jpg",
        },

        {
            id: "u3",
            name: "Pragati Gupta",
            imgUrl: "https://scriptly.org/wp-content/uploads/2016/06/opulent-profile-square-03.jpg",
        },

        {
            id: "u4",
            name: "Ankit Kumar",
            imgUrl: "https://scriptly.org/wp-content/uploads/2016/06/opulent-profile-square-04.jpg",
        },

        {
            id: "u5",
            name: "Surya Sen",
            imgUrl: "https://scriptly.org/wp-content/uploads/2016/06/opulent-profile-square-05.jpg",
        },
    ]

    public static exp: ExploreThread[] = [
        {
            id: "e0",
            pStandId: "s0",
            fromUser: Model.U[3],
            forUser: Model.U[1],
            child: ["se0",],

        },

        {
            id: "e1",
            pStandId: "s1",
            fromUser: Model.U[4],
            forUser: Model.U[1],
            child: ["se1", "se5"],

        },

        {
            id: "e2",
            pStandId: "s1",
            fromUser: Model.U[4],
            forUser: Model.U[2],
            child: ["se2",],

        },

        {
            id: "e3",
            pStandId: "se0",
            fromUser: Model.U[5],
            forUser: Model.U[3],
            child: ["se3",],

        },

        {
            id: "e4",
            pStandId: null,
            fromUser: null,
            forUser: null,
            child: [],

        },

    ]

    public static expThrds: Stand[] = [
        {
            id: "se0",
            author: Model.U[3],
            location: "Patna",
            daysAgo: "4 days ago",
            option: "Aggressive",
            content: "n is clearly alarming and we, as Indian citizens can do nothing more than giving our viewpoints while our soldiers are the ones who have to face it all at the battlefield. What the news channels try to do is to present what has happened while the reality still remains cloudy. That's what I feel. Not to present a biased or emotional stance in here, just hoping for a good answer \(within strategic planning boundaries\).",
            expThrd: null,
            child: [
                Model.exp[3],
            ],
        },

        {
            id: "se1",
            author: Model.U[4],
            location: "Ranchi",
            daysAgo: "2 days ago",
            option: "Aggressive",
            content: "r listened to has a very personal memory attached to it - of a place, of people, of moments. It shall take me back to very specific moments in time and the fact, that I manage to remember them all, only talks plentiful about the impact it has had.",
            expThrd: null,
            child: [

            ],
        },

        {
            id: "se2",
            author: Model.U[4],
            location: "Ranchi",
            daysAgo: "2 days ago",
            option: "Aggressive",
            content: "asdasd",
            expThrd: null,
            child: [],
        },

        {
            id: "se3",
            author: Model.U[5],
            location: "Ranchi",
            daysAgo: "2 days ago",
            option: "Aggressive",
            content: "dhello check has a very personal memory attached to it - of a place, of people, of moments. It shall take me back to very specific moments in time and the fact, that I manage to remember them all, only talks plentiful about the impact it has had.",
            expThrd: null,
            child: [

            ],
        },

        {
            id: "se4",
            author: null,
            location: null,
            daysAgo: null,
            option: null,
            content: null,
            expThrd: null,
            child: [

            ],
        },

        {
            id: "se5",
            author: Model.U[4],
            location: "Patna",
            daysAgo: "4 days ago",
            option: "Aggressive",
            content: "Yes we are working the ones who have to face it all at the battlefield. What the news channels try to do isitlance ianning boundaries\.",
            expThrd: null,
            child: [
            ],
        },


    ]

    public static pStands: Stand[] = [
        {
            id: "s0",
            author: Model.U[1],
            location: "Delhi",
            daysAgo: "4 days ago",
            option: "Aggressive",
            content: "I firmly believe that the situation is only getting worse with time and the \"strategic planning and discussions\" are all vain. The situation is clearly alarming and we, as Indian citizens can do nothing more than giving our viewpoints while our soldiers are the ones who have to face it all at the battlefield. What the news channels try to do is to present what has happened while the reality still remains cloudy. That's what I feel. Not to present a biased or emotional stance in here, just hoping for a good answer \(within strategic planning boundaries\).",
            expThrd: null,
            child: [
                Model.exp[0],
                Model.exp[1],
            ],
        },

        {
            id: "s1",
            author: Model.U[2],
            location: "Kolkata",
            daysAgo: "2 days ago",
            option: "Aggressive",
            content: "For me, music is about memories. Every song I have ever listened to has a very personal memory attached to it - of a place, of people, of moments. It shall take me back to very specific moments in time and the fact, that I manage to remember them all, only talks plentiful about the impact it has had.",
            expThrd: null,
            child: [
                Model.exp[2],
            ],
        },
    ]


    public static expThrdMap = new Map();
    public static pStandsMap = new Map();

    public static getData() {
        this.expThrds.forEach(element => {
            this.expThrdMap[element.id] = element
            this.pStandsMap[element.id] = element
        })

        this.pStands.forEach(element => {
            this.expThrdMap[element.id] = element
            this.pStandsMap[element.id] = element
        })
    }

}
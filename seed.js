const movies = [
    {
        name: 'Pathaan',
        desc: 'An Indian agent races against a doomsday clock as a ruthless mercenary, with a bitter vendetta, mounts an apocalyptic attack against the country.',
        genre: 'Action',
        img: 'https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_FMjpg_UX1000_.jpg',
        cast: [
            {
                name: 'Shahrukh Khan',
                img: 'https://m.media-amazon.com/images/M/MV5BZDk1ZmU0NGYtMzQ2Yi00N2NjLTkyNWEtZWE2NTU4NTJiZGUzXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY1200_CR107,0,630,1200_AL_.jpg'
            },
            {
                name: 'Deepika Padukone',
                img: 'https://m.media-amazon.com/images/M/MV5BNGFlYzAyYjgtNzRjNS00NmE4LTliOGYtYzBkYzU5MzRhMDM0XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_FMjpg_UX1000_.jpg'

            },
            {
                name: 'John Abraham',
                img: 'https://m.media-amazon.com/images/M/MV5BMTY1MDUyMjI1N15BMl5BanBnXkFtZTYwMjg4MjA0._V1_FMjpg_UX1000_.jpg'
            }
        ]
    },
    {
        name: 'Mission Majnu',
        desc: 'In the 1970s, an undercover Indian spy takes on a deadly mission to expose a covert nuclear weapons program in the heart of Pakistan.',
        genre: 'Action',
        img: 'https://m.media-amazon.com/images/M/MV5BYTYwYmI0NGItYmFkYi00NzViLWIwMGEtNGNjYjQwYjY1NTQ1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
        cast: [
            {
                name: 'Sidharth Malhotra',
                img: 'https://m.media-amazon.com/images/M/MV5BMjZjODY4M2ItMWY2ZS00ZDA0LTk4OTUtMzU5NzcwZWQxMWI4XkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_FMjpg_UX1000_.jpg'
            },
            {
                name: 'Rashmika Mandanna',
                img: 'https://m.media-amazon.com/images/M/MV5BMDAxODFhNDgtYzZlOS00MDk5LTk2NTktYjk1NzQwOWFhMDNhXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_FMjpg_UX1000_.jpg'
            }
        ]
    },
    {
        name: 'An Action Hero',
        desc: 'Youth Icon. Superstar. Action Hero. At the age of just 30, Maanav was at the peak of his career when he got caught up in an accident while filming in Haryana. Maanav, who was once a household name, is now living in hiding.',
        genre: 'Action',
        img: 'https://m.media-amazon.com/images/M/MV5BMDJiOTdmMGItMmM5MC00ZTRiLWIzNjctNDE4ZTZkMWMzZTg0XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_FMjpg_UX1000_.jpg',
        cast: [
            {
                name: 'Ayushmann Khurrana',
                img: 'https://m.media-amazon.com/images/M/MV5BYzc5YTA3NjctY2Q1ZS00YjllLWIzNzktOTgxZTA4ZTk4MDEzXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg'
            },
            {
                name: 'Jaideep Ahlawat',
                img: 'https://m.media-amazon.com/images/M/MV5BZWM0NWUwYjQtNjQxMy00NWUwLTkzNzgtZWIxNjE2ZmE0MGFkXkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_QL75_UX140_CR0,1,140,207_.jpg'
            }
        ]
    },
    {
        name: 'Chhorii',
        desc: 'Eight-month pregnant Sakshi must save herself and her unborn child from the evil within society and from the fear that lies in the paranormal world.',
        genre: 'Horror',
        img: 'https://m.media-amazon.com/images/M/MV5BOTBiYWEzMGItMDIyOS00YTdlLWI3MGUtMTk5ZTUzYTY1ZTU2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg',
        cast: [
            {
                name: 'Nushrratt Bharuccha',
                img: 'https://m.media-amazon.com/images/M/MV5BMzI0ZTBjMzUtYmIzNy00ZTcwLWIyNTktOTIwNzJmMzQwZDk0XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg'
            }
        ]
    },
    {
        name: 'Bhool Bhulaiyaa 2',
        desc: 'When strangers Reet and Ruhan cross paths, their journey leads to an abandoned mansion and a dreaded spirit that has been trapped for 18 years.',
        genre: 'Horror',
        img: 'https://m.media-amazon.com/images/M/MV5BNWY5MWEyNzYtYjI2ZS00OWU5LWIxOTUtNjViYTVhY2YzYTc0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
        cast: [
            {
                name: 'Kartik Aaryan',
                img: 'https://m.media-amazon.com/images/M/MV5BODVjZDZlMDgtYWUyNS00MTY1LWFlZjMtZGM5NDJmY2JjM2I2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg'
            },
            {
                name: 'Kiara Advani',
                img: 'https://m.media-amazon.com/images/M/MV5BYWVhMWQyODktNGViZS00NWMyLTlkODEtZTYzMzQ0YTQyYjFmXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg'
            }
        ]
    },
    {
        name: 'Dybbuk',
        desc: 'Mahi, a newly married woman, brings an antique Jewish box into her home. When Mahi and her husband Sam begin to have paranormal experiences, they soon learn that the box is a dybbuk containing an evil spirit. The couple then seeks the help of a rabbi to unravel its mystery. Will they survive this ordeal before their child is born?',
        genre: 'Horror',
        img: 'https://m.media-amazon.com/images/M/MV5BMDA5YjQwM2QtNmZkZi00ZTk3LTg1M2ItMTg3NzU1ZmQyNzc3XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg',
        cast: [
            {
                name: 'Emraan Hashmi',
                img: 'https://m.media-amazon.com/images/M/MV5BMjA4Nzk3MDU0OV5BMl5BanBnXkFtZTgwMTEyMDU0OTE@._V1_FMjpg_UX1000_.jpg'
            },
            {
                name: 'Nikita Dutta',
                img: 'https://m.media-amazon.com/images/M/MV5BZGJiZmVkOWYtMjZkZS00ZTA1LThiNWQtM2ZmMTMyZjBmMmVkXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg'
            }
        ]
    },
    {
        name: 'Gehraiyaan',
        desc: 'Takes you on a journey into the deep rooted intricacies of modern human relationships.',
        genre: 'Romance',
        img: 'https://m.media-amazon.com/images/M/MV5BOGRhZmVhMzQtYWRhZC00MDYwLTlmMTMtZGNhYzgzOTZlZmMyXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg',
        cast: [
            {
                name: 'Deepika Padukone',
                img: 'https://m.media-amazon.com/images/M/MV5BNGFlYzAyYjgtNzRjNS00NmE4LTliOGYtYzBkYzU5MzRhMDM0XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_FMjpg_UX1000_.jpg'

            },
            {
                name: 'Naseeruddin Shah',
                img: 'https://m.media-amazon.com/images/M/MV5BMTQ4MDcyOTExOV5BMl5BanBnXkFtZTgwOTQyMDU0OTE@._V1_.jpg'
            },
            {
                name: 'Siddhant Chaturvedi',
                img: 'https://m.media-amazon.com/images/M/MV5BMjI2Mzg2OTExNl5BMl5BanBnXkFtZTgwMjU1OTQ2MjI@._V1_.jpg'
            },
            {
                name: 'Ananya Panday',
                img: 'https://m.media-amazon.com/images/M/MV5BNjQ2MDU0ODEtNTk4Yi00OTk3LTg2OGItYTc5ZDA0MWIzZTMxXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg'
            },
        ]
    },
    {
        name: 'Shiddat',
        desc: 'A passionate love story involving two couples which highlights the contrast between a regular, mature yet egoistic husband and a unique, happy go lucky, enamored, overzealous boy chasing after the love of his life.',
        genre: 'Romance',
        img: 'https://m.media-amazon.com/images/M/MV5BYWRmYWY3NGItYjY5OC00YTAwLWE2ODMtODJjOTQ3YWFhNDg4XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg',
        cast: [
            {
                name: 'Sunny Kaushal',
                img: 'https://m.media-amazon.com/images/M/MV5BMDI4OTEwNGItZjg5Ni00OWZlLTkwZmQtNzg4YTE3YzcxNWQ1XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg'

            },
            {
                name: 'Radhika Madan',
                img: 'https://m.media-amazon.com/images/M/MV5BZjQ2Y2QxNDAtOWMwYi00MWEyLWE0MzgtOGViZGQzYzFlYzM0XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg'
            }
        ]
    },
    {
        name: 'Love Aaj Kal(2020)',
        desc: 'When professional ambitions clash with personal feelings for a modern-day couple, a love story from a bygone era may offer some wisdom.',
        genre: 'Romance',
        img: 'https://m.media-amazon.com/images/M/MV5BMjNhYzc0YmItOGZjOS00NWJlLWE3ZTEtNGI3MzAxNGYwZWExXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg',
        cast: [
            {
                name: 'Kartik Aaryan',
                img: 'https://m.media-amazon.com/images/M/MV5BODVjZDZlMDgtYWUyNS00MTY1LWFlZjMtZGM5NDJmY2JjM2I2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg'
            },
            {
                name: 'Sara Ali Khan',
                img: 'https://m.media-amazon.com/images/M/MV5BYjRkYTFiNGUtYzcyNS00MTAzLThkOGMtODVjOGRhZTMwMTZlXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg'
            }
        ]
    },
    {
        name: 'Doctor G',
        desc: 'Uday Gupta finds himself as the lone male resident in the Gynaecology department. His reluctance leads to chaos, confusion, comedy and eventually, great camaraderie with his fellow classmates.',
        genre: 'Comedy',
        img: 'https://m.media-amazon.com/images/M/MV5BMGNmNDIyNmItOTU4MC00ZmQzLWI2ODQtODhmOTZlMmY0M2E1XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg',
        cast: [
            {
                name: 'Ayushmann Khurrana',
                img: 'https://m.media-amazon.com/images/M/MV5BYzc5YTA3NjctY2Q1ZS00YjllLWIzNzktOTgxZTA4ZTk4MDEzXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg'
            },
            {
                name: 'Rakul Preet Singh',
                img: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Rakul_Preet_Singh_snapped_promoting_Thank_God_%282%29.jpg'
            }
        ]
    },
    {
        name: 'Cirkus',
        desc: 'Two sets of identical twins are accidentally separated at birth. Several years later, when they are coincidentally in the same town, there is a lot of confusion and misunderstanding when people mistake them for each other.',
        genre: 'Comedy',
        img: 'https://m.media-amazon.com/images/M/MV5BZGUwMzFiNDktNGI2Yy00ZjYwLWFjY2YtYmUzMWYwNWY4Zjg5XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_FMjpg_UX1000_.jpg',
        cast: [
            {
                name: 'Ranveer Singh',
                img: 'https://m.media-amazon.com/images/M/MV5BMTExOTcwMDU4NTReQTJeQWpwZ15BbWU3MDA0MjE1MTc@._V1_FMjpg_UX1000_.jpg'
            },
            {
                name: 'Varun Sharma',
                img: 'https://m.media-amazon.com/images/M/MV5BNzUxZjBkOTgtMTM2Yi00ODU5LWI1NDctZDI5MWVhNTA4MzhlXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_FMjpg_UX1000_.jpg'
            },
            {
                name: 'Pooja Hedge',
                img: 'https://m.media-amazon.com/images/M/MV5BYjQwMWM3MTItY2YyNC00NTIwLWIzZWYtOWNiNDU1MzBkMDUwXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_FMjpg_UX1000_.jpg'
            },
            {
                name: 'Jacqueline Fernandez',
                img: 'https://m.media-amazon.com/images/M/MV5BOTYwNTc1ODE0NF5BMl5BanBnXkFtZTgwNjU3OTA3MjI@._V1_FMjpg_UX1000_.jpg'
            }
        ]
    },
    {
        name: 'Govinda Naam Mera',
        desc: 'The very charming Govinda Waghmare juggles his time and love between his wife Mrs. Waghmare and his girlfriend in this dose of chaos, confusion, and laughter.',
        genre: 'Comedy',
        img: 'https://m.media-amazon.com/images/M/MV5BZGJiZDY2ODQtMDViNC00ZmJkLTk4NzUtOGNkM2EwMzc3YmQ5XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_FMjpg_UX1000_.jpg',
        cast: [
            {
                name: 'Kiara Advani',
                img: 'https://m.media-amazon.com/images/M/MV5BYWVhMWQyODktNGViZS00NWMyLTlkODEtZTYzMzQ0YTQyYjFmXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg'
            },
            {
                name: 'Vicky Kaushal',
                img: 'https://m.media-amazon.com/images/M/MV5BMjIxMjMzNjQ0OF5BMl5BanBnXkFtZTgwODc4ODEzOTE@._V1_UY1200_CR586,0,630,1200_AL_.jpg'
            },
            {
                name: 'Bhumi Pednekar',
                img: 'https://m.media-amazon.com/images/M/MV5BMjMzNTM5NTIyOV5BMl5BanBnXkFtZTgwMTQ2ODA0OTE@._V1_.jpg'
            }
        ]
    }
];

module.exports = movies;
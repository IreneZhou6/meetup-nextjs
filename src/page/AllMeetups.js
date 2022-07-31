import MeetupList from "../components/meetups/MeetupList"

const DUMMY_Data = [
    {
        id: 'm1',
        title: 'This is the first meetup',
        image: 'https://sm.ms/image/xtwgh6mNpsUI5dJ',
        address: 'no1 Meetup City',
        description: 'This is a amazing meetup that you will definitely enjoy! Have a great day!'
    },
    {
        id: 'm2',
        title: 'This is the second meetup',
        image: 'https://sm.ms/image/2z8iECFlM9krhba',
        address: 'no2 Meetup City',
        description: 'This is a amazing meetup that you will definitely enjoy! Have a great day!'
    }
]

export default function AllMeetupsPage() {
    return (
        <MeetupList meetups={DUMMY_Data} />
    )
}
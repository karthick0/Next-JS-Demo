import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList({ meetups }) {
  if (meetups.length === 0) {
    return <p>Empty Data!</p>;
  }
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;

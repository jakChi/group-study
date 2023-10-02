import data from "../CLASS_DATA.json";

//shesadzelebelia imis gaketeba ro gatedan leaderboards gadmoecemodes currentClass da marto am klasis studentebs uchvenebdes
//online Status unda davumato studentebs
const Leaderboard = () => {

  const membersArr = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].class_members.length; j++) {
      membersArr.push(data[i].class_members[j].name)
    }
  }

  return (
    <div className="leader-board">
      <h4>students:</h4>
      <ol className="students-list">
        {membersArr.map((memb, i) => (
          <li key={i}>{memb} - offline</li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;

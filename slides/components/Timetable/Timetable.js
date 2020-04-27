import React from 'react';

class Timetable extends React.Component {

  render() {

    const {
        start,
        items
    } = this.props;

    const currentDate = new Date();

    const startTimes = start.split(":");
    let prevItemStartSeconds = currentDate.setHours(startTimes[0], startTimes[1], 0, 0);

    const itemsWithTimes = items.map((item, k) => {
        const itemFinishTimes = item.length.split(":");

        const itemStartSeconds = prevItemStartSeconds;
        const lengthSeconds = (parseInt(itemFinishTimes[0]*60) + parseInt(itemFinishTimes[1]))*60*1000;
        const itemFinishSeconds = itemStartSeconds + lengthSeconds;
        prevItemStartSeconds = itemFinishSeconds;

        return {
            start: new Date(itemStartSeconds),
            finish: new Date(itemFinishSeconds),
            title: item.title
        }
    });

    return (
      <table><tbody>
          {itemsWithTimes.map((item, k) => (
              <tr key={`timetable__item-${k}`}>
                    <td>{
                        item.start.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                        -
                        {item.finish.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
                    }</td>
                    <td>{item.title}</td>
              </tr>
          ))}
      </tbody></table>
    );
  }

}

export default Timetable;

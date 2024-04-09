import { Table, Button } from "react-bootstrap";
import classes from "./Home.module.css";
import Generics from '../header/Generics';
import { useContext } from "react";
import { GlobalContext } from "../../App";

const tourlist = [
  { date: "JUL16", city: "DETROIT, MI", title: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL19", city: "TORONTO,ON", title: "BUDWEISER STAGE" },
  { date: "JUL 22", city: "BRISTOW, VA", title: "JIGGY LUBE LIVE" },
  { date: "JUL 29", city: "PHOENIX, AZ", title: "AK-CHIN PAVILION" },
  { date: "AUG 2", city: "LAS VEGAS, NV", title: "T-MOBILE ARENA" },
  { date: "AUG 7", city: "CONCORD, CA", title: "CONCORD PAVILION" },
];

function Home() {
    const {showAlbum, updateShowAlbum} = useContext(GlobalContext);
    updateShowAlbum(true);
  return (
    <>
    <Generics />
      <div className={classes.homeMain}>
        <h1>TOURS</h1>
        <Table className={classes.mainTable}>
          {tourlist.map((item) => (
            <tr>
              <td className={classes.date}>{item.date}</td>
              <td className={classes.city}>{item.city}</td>
              <td className={classes.title}>{item.title}</td>
              <td>
                <Button className={classes.buy}>Buy Tickets</Button>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </>
  );
}

export default Home;

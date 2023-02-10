import Table from "react-bootstrap/Table";
import { ImCross } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";

const HomeData = () => {
  return (
    <Table hover>
      <thead className="tableHead">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date Created</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>01/10/2013</td>
          <td>Admin</td>
          <td>Active</td>
          <td>
            <ImCross style={{ marginRight: "1.2rem" }} size="1.2rem" />
            <IoMdSettings size="1.2rem" />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Peter</td>
          <td>05/08/2012</td>
          <td>Publisher</td>
          <td>Active</td>
          <td>
            <ImCross style={{ marginRight: "1.2rem" }} size="1.2rem" />
            <IoMdSettings size="1.2rem" />
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Steve</td>
          <td>10/11/2014</td>
          <td>Moderator</td>
          <td>Suspended</td>
          <td>
            <ImCross style={{ marginRight: "1.2rem" }} size="1.2rem" />
            <IoMdSettings size="1.2rem" />
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>John</td>
          <td>06/07/2018</td>
          <td>Admin</td>
          <td>Active</td>
          <td>
            <ImCross style={{ marginRight: "1.2rem" }} size="1.2rem" />
            <IoMdSettings size="1.2rem" />
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Harry</td>
          <td>20/04/2010</td>
          <td>Publisher</td>
          <td>Active</td>
          <td>
            <ImCross style={{ marginRight: "1.2rem" }} size="1.2rem" />
            <IoMdSettings size="1.2rem" />
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Ron</td>
          <td>30/04/2014</td>
          <td>Admin</td>
          <td>Suspended</td>
          <td>
            <ImCross style={{ marginRight: "1.2rem" }} size="1.2rem" />
            <IoMdSettings size="1.2rem" />
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Lex</td>
          <td>14/03/2019</td>
          <td>Admin</td>
          <td>Active</td>
          <td>
            <ImCross style={{ marginRight: "1.2rem" }} size="1.2rem" />
            <IoMdSettings size="1.2rem" />
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>Itadori</td>
          <td>04/05/2009</td>
          <td>Admin</td>
          <td>Active</td>
          <td>
            <ImCross style={{ marginRight: "1.2rem" }} size="1.2rem" />
            <IoMdSettings size="1.2rem" />
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>Levi</td>
          <td>08/10/2007</td>
          <td>Publisher</td>
          <td>Suspended</td>
          <td>
            <ImCross style={{ marginRight: "1.2rem" }} size="1.2rem" />
            <IoMdSettings size="1.2rem" />
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>Eren</td>
          <td>11/11/2017</td>
          <td>Admin</td>
          <td>Active</td>
          <td>
            <ImCross style={{ marginRight: "1.2rem" }} size="1.2rem" />
            <IoMdSettings size="1.2rem" />
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>Mikasa</td>
          <td>25/12/2015</td>
          <td>Publisher</td>
          <td>Active</td>
          <td>
            <ImCross style={{ marginRight: "1.2rem" }} size="1.2rem" />
            <IoMdSettings size="1.2rem" />
          </td>
        </tr>
        <tr>
          <td>12</td>
          <td>Erwin</td>
          <td>06/09/2016</td>
          <td>Moderator</td>
          <td>Active</td>
          <td>
            <ImCross style={{ marginRight: "1.2rem" }} size="1.2rem" />
            <IoMdSettings size="1.2rem" />
          </td>
        </tr>
        <tr>
          <td>13</td>
          <td>Gojo</td>
          <td>08/08/2017</td>
          <td>Admin</td>
          <td>Active</td>
          <td>
            <ImCross style={{ marginRight: "1.2rem" }} size="1.2rem" />
            <IoMdSettings size="1.2rem" />
          </td>
        </tr>
        <tr>
          <td>14</td>
          <td>Todou</td>
          <td>19/09/2020</td>
          <td>Publisher</td>
          <td>Active</td>
          <td>
            <ImCross style={{ marginRight: "1.2rem" }} size="1.2rem" />
            <IoMdSettings size="1.2rem" />
          </td>
        </tr>
        <tr>
          <td>15</td>
          <td>Rui</td>
          <td>08/06/2016</td>
          <td>Publisher</td>
          <td>Suspended</td>
          <td>
            <ImCross style={{ marginRight: "1.2rem" }} size="1.2rem" />
            <IoMdSettings size="1.2rem" />
          </td>
        </tr>
        <tr>
          <td>16</td>
          <td>Gyutaro</td>
          <td>12/02/2017</td>
          <td>Moderator</td>
          <td>Active</td>
          <td>
            <ImCross style={{ marginRight: "1.2rem" }} size="1.2rem" />
            <IoMdSettings size="1.2rem" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default HomeData;

import React from 'react';
import PropTypes from 'prop-types';

export default function STable({ people }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {people.map(
          ({ _id, name, age, isShown }) =>
            isShown && (
              <tr key={_id}>
                <td>{_id}</td>
                <td>{name}</td>
                <td>{age}</td>
              </tr>
            )
        )}
      </tbody>
    </table>
  );
}

STable.propTypes = {
  people: PropTypes.array.isRequired,
};

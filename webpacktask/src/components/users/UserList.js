import React from 'react';
import './user-list.scss'
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { fetchUsers } from '../../actions';
import './user-list.scss'

class UserList extends React.Component {
    onGetUsers() {
        let { fetchUsers } = this.props;
        fetchUsers();
    }
    render() {
        let { users } = this.props;
        debugger
        return (
            <div className={"user-list"}>
                <div><button onClick={() => this.onGetUsers()}>Get my users</button></div>
                User list:
                <div>
                    {!!users.length &&
                        users.map((user, index) => (
                            <div key={index}>
                                {user.username}
                            </div>
                        ))}

                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    users: state.users.data,
});



const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUsers: fetchUsers,
}, dispatch);


export default compose(connect(mapStateToProps, mapDispatchToProps))(UserList);


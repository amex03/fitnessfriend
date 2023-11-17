const User =require ('./User')
const Dashboard = requiere ('./dasboard')
const Comment =require ('./comment')


Dashboard.belongTo(User,{
    foreignKey:'user_name',
    targekey:'username'
});

Comment.belongsTo(User,{
    foreignKey:'user_id',
    targetKey:'id'
});

Dashboard.hasMany(Comment,{
foreignKey:'dashboard_id',
sourcekey:'id',
});

module.exports={
    User,
    Dashboard,
    Comment
};
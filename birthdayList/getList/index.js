//获取所有日期列表
const cloud = require('wx-server-sdk')
const rp=require("request-promise")
cloud.init()
const db=cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const {database,condition}=event;
  try {
    return await db.collection(database).where(condition).get()
  } catch (error) {
    console.log(error);
  }
}

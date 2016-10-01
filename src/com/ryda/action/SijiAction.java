package com.ryda.action;

import com.ryda.entity.Siji;
import com.ryda.service.ISijiService;

import java.util.List;

public class SijiAction {


	/**
	 * 模型层
	 */
	private ISijiService service;
	/**
	 * 查询所有数据的集合,往list页面传值用
	 */
	private List list;
	/**
	 * 实体类
	 */
	private Siji obj;
	/**
	 * 主键,转到修改页面查询单个对象用
	 */
	private String id;
	/**
	 * 主键集合,删除用
	 */
	private String[] ids;
	
	/**
	 * 用于下拉菜单的4个list
	 * 司机类型 sjlxList
	 * 驾照类型  jzlxList
	 * 所属地区  ssdqList 
	 * 等级评定   djpdList
	 */
	private List sjlxList;
	private List jzlxList;
	private List ssdqList;
	private List djpdList;


	/**
	 * 条件查询
	 */
	private String sjlxId;//司机类型id
	private String jzlxId;//驾照类型id
	private String dqId;//地区id
	private String djpdId;//等级id
	private String keyword;//关键字

	/**
	 * 分页
	 */
	int i = 0;// 中间变量
	private int k;// 存储最大页面数
	private int pageNow = 1;// 页码数，初始为1
	private int pageSize = 10;// 页面行数
	private int intRowCount;// 总行数
	private int intPageCount;// 总页数



	/**
	 * 查询所有数据
	 * @return
	 */
	public String query(){

		//list = service.query();

		// 条件查询的下拉列表
		sjlxList = service.querySJLX();
		jzlxList = service.queryJZLX();;
		ssdqList = service.querySSDQ();;
		djpdList = service.queryDJPD();;

		// 查询分页数据
		//计算出总条数
		intRowCount = service.count(sjlxId, jzlxId, dqId, djpdId,  keyword);
		k = (intRowCount + pageSize - 1) / pageSize;
		// 计算出总页数
		intPageCount = (intRowCount + pageSize - 1) / pageSize;
		if (pageNow <= 1) {
			pageNow = 1;
			i = 0;
		}
		if (pageNow > 1 && pageNow < intPageCount) {
			i = (intPageCount - pageNow) * pageSize;
		}
		if (pageNow > 1 && pageNow == intPageCount) {
			i = (pageNow - 1) * pageSize;
		}
		System.out.println(">>>intRowCount>>>" + intRowCount + ">>>k>>>" + k
				+ ">>>intPageCount>>>" + intPageCount + ">>>pageNow>>>"
				+ pageNow + ">>>i>>>" + i);

		//条件查询
		list = service.querySiji(sjlxId, jzlxId, dqId, djpdId,  keyword, i, pageSize);

		return "query";
	}
	
	/**
	 * 转到添加页面
	 * @return
	 */
	public String addpage(){
		 sjlxList = service.querySJLX();
		 jzlxList = service.queryJZLX();;
		 ssdqList = service.querySSDQ();;
		 djpdList = service.queryDJPD();;
		return "addpage";
	}
	/**
	 * 添加保存
	 * @return
	 */
	public String addsave(){
		service.save( obj );
		
		return "requery";
	}
	/**
	 * 转到修改页面
	 * @return
	 */
	public String editpage(){
		obj = service.queryById(id);
		sjlxList = service.querySJLX();
		jzlxList = service.queryJZLX();;
		ssdqList = service.querySSDQ();;
		djpdList = service.queryDJPD();;
		return "editpage";
	}
	/**
	 * 修改保存
	 * @return
	 */
	public String editsave(){
		service.update(obj);
		return "requery";
	}
	/**
	 * 单个删除
	 * @return
	 */
	public String deleteOne(){
		service.deleteOne(id);
		return "requery";
	}
	/**
	 * 多个删除
	 * @return
	 */
	public String deleteMany(){
		service.delete(ids);
		return "requery";
	}

	public ISijiService getService() {
		return service;
	}

	public void setService(ISijiService service) {
		this.service = service;
	}

	public List getList() {
		return list;
	}

	public void setList(List list) {
		this.list = list;
	}

	public Siji getObj() {
		return obj;
	}

	public void setObj(Siji obj) {
		this.obj = obj;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String[] getIds() {
		return ids;
	}

	public void setIds(String[] ids) {
		this.ids = ids;
	}

	public List getSjlxList() {
		return sjlxList;
	}

	public void setSjlxList(List sjlxList) {
		this.sjlxList = sjlxList;
	}

	public List getJzlxList() {
		return jzlxList;
	}

	public void setJzlxList(List jzlxList) {
		this.jzlxList = jzlxList;
	}

	public List getSsdqList() {
		return ssdqList;
	}

	public void setSsdqList(List ssdqList) {
		this.ssdqList = ssdqList;
	}

	public List getDjpdList() {
		return djpdList;
	}

	public void setDjpdList(List djpdList) {
		this.djpdList = djpdList;
	}

	public String getSjlxId() {
		return sjlxId;
	}

	public void setSjlxId(String sjlxId) {
		this.sjlxId = sjlxId;
	}

	public String getJzlxId() {
		return jzlxId;
	}

	public void setJzlxId(String jzlxId) {
		this.jzlxId = jzlxId;
	}

	public String getDqId() {
		return dqId;
	}

	public void setDqId(String dqId) {
		this.dqId = dqId;
	}

	public String getDjpdId() {
		return djpdId;
	}

	public void setDjpdId(String djpdId) {
		this.djpdId = djpdId;
	}

	public String getKeyword() {
		return keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}

	public int getK() {
		return k;
	}

	public void setK(int k) {
		this.k = k;
	}

	public int getPageNow() {
		return pageNow;
	}

	public void setPageNow(int pageNow) {
		this.pageNow = pageNow;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getIntRowCount() {
		return intRowCount;
	}

	public void setIntRowCount(int intRowCount) {
		this.intRowCount = intRowCount;
	}

	public int getIntPageCount() {
		return intPageCount;
	}

	public void setIntPageCount(int intPageCount) {
		this.intPageCount = intPageCount;
	}


}

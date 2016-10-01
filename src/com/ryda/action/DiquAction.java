package com.ryda.action;

import com.ryda.entity.Diqu;
import com.ryda.service.IDiquService;

import java.util.List;

public class DiquAction {

	/**
	 * 模型层
	 */
	private IDiquService service;
	/**
	 * 查询所有数据的集合,往list页面传值用
	 */
	private List list;
	/**
	 * 实体类
	 */
	private Diqu obj;
	/**
	 * 主键,转到修改页面查询单个对象用
	 */
	private String id;
	/**
	 * 主键集合,删除用
	 */
	private String[] ids;


	/**
	 * 条件查询
	 */
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

		// 查询分页数据
		//计算出总条数
		intRowCount = service.count( keyword);
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
		list = service.queryDiqu(keyword, i, pageSize);

		return "query";
	}
	
	/**
	 * 转到添加页面
	 * @return
	 */
	public String addpage(){
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

	public IDiquService getService() {
		return service;
	}

	public void setService(IDiquService service) {
		this.service = service;
	}

	public List getList() {
		return list;
	}

	public void setList(List list) {
		this.list = list;
	}

	public Diqu getObj() {
		return obj;
	}

	public void setObj(Diqu obj) {
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

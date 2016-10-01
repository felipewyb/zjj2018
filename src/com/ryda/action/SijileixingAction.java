package com.ryda.action;

import java.util.List;

import com.ryda.entity.Sijileixing;
import com.ryda.service.ISijileixingService;

public class SijileixingAction {
	/**
	 * 模型层
	 */
	private ISijileixingService  service ;
	/**
	 * 查询所有数据的集合，往list页面传值用
	 */
	private List list;
	/**
	 * 实体类
	 */
	private Sijileixing obj;
	/**
	 * 主键，转到修改页面查询单个对象用
	 */
	private String id;
	/**
	 * 主键集合，删除用
	 */
	private String[] ids;
	
	/**
	 * 查询所有数据
	 * @return
	 */
	public String query(){
		list = service.query();
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
		service.save(obj);
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

	public ISijileixingService getService() {
		return service;
	}

	public void setService(ISijileixingService service) {
		this.service = service;
	}

	public List getList() {
		return list;
	}

	public void setList(List list) {
		this.list = list;
	}

	public Sijileixing getObj() {
		return obj;
	}

	public void setObj(Sijileixing obj) {
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
	
	
	
}

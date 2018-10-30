package com.ryda.action;

import com.ryda.entity.Backrole;
import com.ryda.service.BackroleService;

import java.util.List;

public class BackroleAction {
	/**
	 * 模型层
	 */
	private BackroleService service ;
	/**
	 * 查询所有数据的集合，往list页面传值用
	 */
	private List list;
	/**
	 * 实体类
	 */
	private Backrole obj;
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
	public String addaccount(){
		return "addaccount";
	}
	public String addagent1(){
		return "addagent1";
	}
	public String addagent2(){
		return "addagent2";
	}
	public String addagent3(){
		return "addagent3";
	}
	public String addagent4(){
		return "addagent3";
	}
	public String addagent5(){
		return "addagent3";
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

	public BackroleService getService() {
		return service;
	}

	public void setService(BackroleService service) {
		this.service = service;
	}

	public List getList() {
		return list;
	}

	public void setList(List list) {
		this.list = list;
	}

	public Backrole getObj() {
		return obj;
	}

	public void setObj(Backrole obj) {
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

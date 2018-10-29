package com.ryda.action;

import com.ryda.entity.Machine;
import com.ryda.service.MachineService;

import java.util.List;

public class MachineAction {
	/**
	 * 模型层
	 */
	private MachineService service ;
	/**
	 * 查询所有数据的集合，往list页面传值用
	 */
	private List list;
	private int total;

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	/**
	 * 实体类
	 */
	private Machine obj;
	/**
	 * 主键，转到修改页面查询单个对象用
	 */
	private int id;


	/**
	 * 查询所有数据
	 * @return
	 */
	public String query(){
		list = service.query();
		total=list.size();
		return "query";
	}

	/**
	 * 转到审核页面
	 * @return
	 */
	public String editpage(){
		obj = service.queryById(id);
		System.out.println("editpage-->OBJ.ID="+obj.getId());
		return "editpage";
	}

	/**
	 * 修改审核信息
	 * @return
	 */
	public String editsave(){
		System.out.println("OBJ.ID="+obj.getId());
		System.out.println("OBJ.PRICE="+obj.getPrice());
		System.out.println("OBJ.TOTAL="+obj.getTotal());
		service.update(obj);
		return "requery";
	}

	public MachineService getService() {
		return service;
	}

	public void setService(MachineService service) {
		this.service = service;
	}

	public List getList() {
		return list;
	}

	public void setList(List list) {
		this.list = list;
	}

	public Machine getObj() {
		return obj;
	}

	public void setObj(Machine obj) {
		this.obj = obj;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}

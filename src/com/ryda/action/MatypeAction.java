package com.ryda.action;

import com.ryda.entity.Matype;
import com.ryda.service.MatypeService;
import org.apache.struts2.ServletActionContext;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

public class MatypeAction {
	/**
	 * 模型层
	 */
	private MatypeService service ;
	/**
	 * 查询所有数据的集合，往list页面传值用
	 */
	private List list;
	/**
	 * 实体类
	 */
	private Matype obj;
	/**
	 * 主键，转到修改页面查询单个对象用
	 */
	private int id;
	/**
	 * 主键集合，删除用
	 */
	private int[] ids;

	/**
	 * 检验重复用
	 */
	private int matype;

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

	public MatypeService getService() {
		return service;
	}

	public void setService(MatypeService service) {
		this.service = service;
	}

	public List getList() {
		return list;
	}

	public void setList(List list) {
		this.list = list;
	}

	public Matype getObj() {
		return obj;
	}

	public void setObj(Matype obj) {
		this.obj = obj;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int[] getIds() {
		return ids;
	}

	public void setIds(int[] ids) {
		this.ids = ids;
	}

	public int getMatype() {
		return matype;
	}

	public void setMatype(int matype) {
		this.matype = matype;
	}

	/**
	 * 检查是否重复
	 */
	public void checkforrepeat() throws IOException {
		int a=0;

		a=service.checkforrepeat(matype);

		HttpServletResponse response = ServletActionContext.getResponse();
		PrintWriter out = response.getWriter();

		if(a==1){
			out.print("{\"success\":false,\"message\":\"输入内容重复，请重新输入\"}");
		}else{
			out.print("{\"success\":true,\"message\":\"输入内容不重复，可用\"}");
		}
	}
	
}

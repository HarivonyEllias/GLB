package ambovombe.kombarika;
/*entity
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */

import ambovombe.kombarika.generator.CodeGenerator;
import ambovombe.kombarika.generator.service.DbService;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Scanner;
/**
 *
 *  @author Mamisoa
 */
public class Test {

    /**
     * @param args the command line arguments
     * @throws SQLException
     */
     
    public static void main(String[] args) throws Exception {
        CodeGenerator codeGenerator = new CodeGenerator();  
        Scanner scanner = new Scanner(System.in);

        System.out.println("1-) Write the path of your model and controller project:");
        System.out.print("\t>> ");
        String path = scanner.nextLine();

        System.out.println("2-) Write the path of the view of your project:");
        System.out.print("\t>> ");
        String viewPath = scanner.nextLine();

        System.out.println("3-) Choose your framework:\n\ta-) java:karana");
        System.out.print("\t>> ");
        String framework = scanner.nextLine();
        if (framework.equals("a")) {
            framework = "java:karana";
        }

        System.out.println("4-) Write your project package:");
        System.out.print("\t>> ");
        String packageName = scanner.nextLine();

        System.out.println("5-) Write your entity package:");
        System.out.print("\t>> ");
        String entity = scanner.nextLine(); 

        System.out.println("6-) Write your controller package:");
        System.out.print("\t>> ");
        String controller = scanner.nextLine();

        System.out.println("7-) Write your repository package:");
        System.out.print("\t>> ");
        String repository = scanner.nextLine();

        System.out.println("8-) Write your view package:");
        System.out.print("\t>> ");
        String view = scanner.nextLine();

        System.out.println("9-) Choose your view type:\n\ta-)react");
        System.out.print("\t>> ");
        String viewType = scanner.nextLine();
        if (viewType.equals("a")) {
            viewType = "react";
        }

        System.out.println("10-) Write your API URL:");
        System.out.print("\t>> ");
        String url = scanner.nextLine();

        System.out.println(path + " " + viewPath + " " + framework + " " + packageName + " " + controller + " " + repository + " " + view + " " + viewType + " " + url);
        try{
            // String[] tables = {"district","region"};
            // DbConnection dbConnection = codeGenerator.getDbConnection();
            // String str = dbConnection.getListConnection().get(dbConnection.getInUseConnection()).getDatabaseType().getForeignKeyQuery();
            // str = str.replace("?", "commune");
            // System.out.println(str);
            // HashMap<String, String> foreignKeys = DbService.getForeignKeys(dbConnection, "commune");
            // for (Map.Entry<String, String> set : foreignKeys.entrySet()) {
            //     System.out.println(set.getKey() + " " + set.getValue());
            // }
            String[] tables = DbService.getAllTablesArrays(codeGenerator.getDbConnection());
            // for(String table: tables)
            //     System.out.println(table);
            
            /* My test */
            // codeGenerator.generateAllEntity(path, tables, packageName, entity, framework);
            // codeGenerator.generateAllRepository(path, tables, packageName, entity, repository, framework);
            // codeGenerator.generateAllController(path, tables, packageName, entity, controller, repository, framework);
            
            /* Main test */
           codeGenerator.generateAll(path, viewPath, packageName, entity, controller, repository, view, viewType, url, tables, framework);
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            codeGenerator.getDbConnection().close();
        }    
    }
}
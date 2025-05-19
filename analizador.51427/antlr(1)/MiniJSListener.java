// Generated from c://Users//liano//OneDrive//Escritorio//SSL//analizador.51427//nodes_module//MiniJS.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MiniJSParser}.
 */
public interface MiniJSListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MiniJSParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(MiniJSParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJSParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(MiniJSParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJSParser#simpleStatement}.
	 * @param ctx the parse tree
	 */
	void enterSimpleStatement(MiniJSParser.SimpleStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJSParser#simpleStatement}.
	 * @param ctx the parse tree
	 */
	void exitSimpleStatement(MiniJSParser.SimpleStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJSParser#assignmentStatement}.
	 * @param ctx the parse tree
	 */
	void enterAssignmentStatement(MiniJSParser.AssignmentStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJSParser#assignmentStatement}.
	 * @param ctx the parse tree
	 */
	void exitAssignmentStatement(MiniJSParser.AssignmentStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJSParser#outputStatement}.
	 * @param ctx the parse tree
	 */
	void enterOutputStatement(MiniJSParser.OutputStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJSParser#outputStatement}.
	 * @param ctx the parse tree
	 */
	void exitOutputStatement(MiniJSParser.OutputStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link MiniJSParser#constant}.
	 * @param ctx the parse tree
	 */
	void enterConstant(MiniJSParser.ConstantContext ctx);
	/**
	 * Exit a parse tree produced by {@link MiniJSParser#constant}.
	 * @param ctx the parse tree
	 */
	void exitConstant(MiniJSParser.ConstantContext ctx);
}
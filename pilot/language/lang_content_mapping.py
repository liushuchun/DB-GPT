## 短期内在该文件中配置，长期考虑将会存储在默认的数据库中存储，并可以支持多种语言的配置

lang_dicts = {
    "zh": {
        "unique_id": "中文内容",
        "db_gpt_introduction": "鲲言智能sqlboy-GPT是一款基于大模型的sql开发辅助工具，使用本地化的GPT大模型与您的数据和环境进行交互，无数据泄露风险，100% 私密，100% 安全。",
        "learn_more_markdown": "该工具有助于帮助系统维护",
        "model_control_param": "模型参数",
        "sql_generate_mode_direct": "直接执行结果",
        "sql_generate_mode_none": "DB问答",
        "max_input_token_size": "最大输出Token数",
        "please_choose_database": "请选择数据",
        "sql_generate_diagnostics": "SQL生成与诊断",
        "knowledge_qa_type_llm_native_dialogue": "LLM原生对话",
        "knowledge_qa_type_default_knowledge_base_dialogue": "默认知识库对话",
        "knowledge_qa_type_add_knowledge_base_dialogue": "新增知识库对话",
        "knowledge_qa_type_url_knowledge_dialogue": "URL网页知识对话",
        "create_knowledge_base": "新建知识库",
        "sql_schema_info": "数据库{}的Schema信息如下: {}\n",
        "current_dialogue_mode": "当前对话模式",
        "database_smart_assistant": "数据库智能助手",
        "sql_vs_setting": "自动执行模式下, sqlboy-GPT可以具备执行SQL、从网络读取知识自动化存储学习的能力",
        "knowledge_qa": "知识问答",
        "chat_use_plugin": "插件模式",
        "dialogue_use_plugin": "对话使用插件",
        "select_plugin": "选择插件",
        "configure_knowledge_base": "配置知识库",
        "new_klg_name": "新知识库名称",
        "url_input_label": "输入网页地址",
        "add_as_new_klg": "添加为新知识库",
        "add_file_to_klg": "向知识库中添加文件",
        "upload_file": "上传文件",
        "add_file": "添加文件",
        "upload_and_load_to_klg": "上传并加载到知识库",
        "upload_folder": "上传文件夹",
        "add_folder": "添加文件夹",
        "send": "发送",
        "regenerate": "重新生成",
        "clear_box": "清理",
    }
  
}


def get_lang_content(key, language="zh"):
    return lang_dicts.get(language, {}).get(key, "")

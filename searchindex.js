Search.setIndex({docnames:["index","main","migration","modules/config","modules/conftest","modules/helperFunctions","modules/helperFunctions.compare_sets","modules/helperFunctions.data_conversion","modules/helperFunctions.database","modules/helperFunctions.docker","modules/helperFunctions.fileSystem","modules/helperFunctions.hash","modules/helperFunctions.install","modules/helperFunctions.logging","modules/helperFunctions.merge_generators","modules/helperFunctions.object_conversion","modules/helperFunctions.pdf","modules/helperFunctions.plugin","modules/helperFunctions.process","modules/helperFunctions.program_setup","modules/helperFunctions.tag","modules/helperFunctions.task_conversion","modules/helperFunctions.uid","modules/helperFunctions.virtual_file_path","modules/helperFunctions.web_interface","modules/helperFunctions.yara_binary_search","modules/objects","modules/objects.file","modules/objects.firmware","modules/scheduler","modules/scheduler.analysis","modules/web_interface","modules/web_interface.rest","modules/web_interface.rest.helper"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["index.rst","main.rst","migration.rst","modules/config.rst","modules/conftest.rst","modules/helperFunctions.rst","modules/helperFunctions.compare_sets.rst","modules/helperFunctions.data_conversion.rst","modules/helperFunctions.database.rst","modules/helperFunctions.docker.rst","modules/helperFunctions.fileSystem.rst","modules/helperFunctions.hash.rst","modules/helperFunctions.install.rst","modules/helperFunctions.logging.rst","modules/helperFunctions.merge_generators.rst","modules/helperFunctions.object_conversion.rst","modules/helperFunctions.pdf.rst","modules/helperFunctions.plugin.rst","modules/helperFunctions.process.rst","modules/helperFunctions.program_setup.rst","modules/helperFunctions.tag.rst","modules/helperFunctions.task_conversion.rst","modules/helperFunctions.uid.rst","modules/helperFunctions.virtual_file_path.rst","modules/helperFunctions.web_interface.rst","modules/helperFunctions.yara_binary_search.rst","modules/objects.rst","modules/objects.file.rst","modules/objects.firmware.rst","modules/scheduler.rst","modules/scheduler.analysis.rst","modules/web_interface.rst","modules/web_interface.rest.rst","modules/web_interface.rest.helper.rst"],objects:{"":[[3,0,0,"-","config"],[4,0,0,"-","conftest"]],"config.Config":[[3,2,1,"","Config"],[3,2,1,"","data_storage"],[3,2,1,"","database"],[3,2,1,"","default_plugins"],[3,2,1,"","expert_settings"],[3,2,1,"","logging"],[3,2,1,"","statistics"],[3,2,1,"","unpack"]],"config.DataStorage":[[3,2,1,"","Config"],[3,2,1,"","docker_mount_base_dir"],[3,2,1,"","firmware_file_storage_directory"],[3,2,1,"","password_salt"],[3,2,1,"","postgres_admin_pw"],[3,2,1,"","postgres_admin_user"],[3,2,1,"","postgres_database"],[3,2,1,"","postgres_del_pw"],[3,2,1,"","postgres_del_user"],[3,2,1,"","postgres_port"],[3,2,1,"","postgres_ro_pw"],[3,2,1,"","postgres_ro_user"],[3,2,1,"","postgres_rw_pw"],[3,2,1,"","postgres_rw_user"],[3,2,1,"","postgres_server"],[3,2,1,"","postgres_test_database"],[3,2,1,"","redis_fact_db"],[3,2,1,"","redis_host"],[3,2,1,"","redis_port"],[3,2,1,"","redis_test_db"],[3,2,1,"","structural_threshold"],[3,2,1,"","temp_dir_path"],[3,2,1,"","user_database"]],"config.Database":[[3,2,1,"","Config"],[3,2,1,"","ajax_stats_reload_time"],[3,2,1,"","number_of_latest_firmwares_to_display"],[3,2,1,"","results_per_page"]],"config.DefaultPlugins":[[3,2,1,"","Config"]],"config.ExpertSettings":[[3,2,1,"","Config"],[3,2,1,"","authentication"],[3,2,1,"","block_delay"],[3,2,1,"","communication_timeout"],[3,2,1,"","intercom_poll_delay"],[3,2,1,"","nginx"],[3,2,1,"","radare2_host"],[3,2,1,"","ssdeep_ignore"],[3,2,1,"","throw_exceptions"],[3,2,1,"","unpack_threshold"],[3,2,1,"","unpack_throttle_limit"]],"config.Logging":[[3,2,1,"","Config"],[3,2,1,"","logfile"],[3,2,1,"","loglevel"]],"config.Statistics":[[3,2,1,"","Config"],[3,2,1,"","max_elements_per_chart"]],"config.Unpack":[[3,2,1,"","Config"],[3,2,1,"","max_depth"],[3,2,1,"","memory_limit"],[3,2,1,"","threads"],[3,2,1,"","whitelist"]],"helperFunctions.compare_sets":[[6,3,1,"","iter_element_and_rest"],[6,3,1,"","remove_duplicates_from_list"],[6,3,1,"","substring_is_in_list"]],"helperFunctions.data_conversion":[[7,3,1,"","convert_compare_id_to_list"],[7,3,1,"","convert_str_to_bool"],[7,3,1,"","convert_time_to_str"],[7,3,1,"","convert_uid_list_to_compare_id"],[7,3,1,"","get_value_of_first_key"],[7,3,1,"","make_bytes"],[7,3,1,"","make_unicode_string"],[7,3,1,"","none_to_none"],[7,3,1,"","normalize_compare_id"]],"helperFunctions.database":[[8,1,1,"","ConnectTo"],[8,3,1,"","get_shared_session"]],"helperFunctions.docker":[[9,3,1,"","run_docker_container"]],"helperFunctions.fileSystem":[[10,3,1,"","file_is_empty"],[10,3,1,"","get_config_dir"],[10,3,1,"","get_relative_object_path"],[10,3,1,"","get_src_dir"],[10,3,1,"","get_template_dir"]],"helperFunctions.hash":[[11,3,1,"","get_hash"],[11,3,1,"","get_imphash"],[11,3,1,"","get_md5"],[11,3,1,"","get_sha256"],[11,3,1,"","get_ssdeep"],[11,3,1,"","get_tlsh"],[11,3,1,"","get_tlsh_comparison"],[11,3,1,"","normalize_lief_items"]],"helperFunctions.install":[[12,4,1,"","InstallationError"],[12,1,1,"","OperateInDirectory"],[12,3,1,"","apt_install_packages"],[12,3,1,"","apt_remove_packages"],[12,3,1,"","apt_update_sources"],[12,3,1,"","check_distribution"],[12,3,1,"","check_if_command_in_path"],[12,3,1,"","dnf_install_packages"],[12,3,1,"","dnf_remove_packages"],[12,3,1,"","dnf_update_sources"],[12,3,1,"","install_github_project"],[12,3,1,"","install_pip_packages"],[12,3,1,"","is_virtualenv"],[12,3,1,"","log_current_packages"],[12,3,1,"","read_package_list_from_file"],[12,3,1,"","remove_folder"],[12,3,1,"","run_cmd_with_logging"]],"helperFunctions.logging":[[13,1,1,"","ColoringFormatter"],[13,1,1,"","TerminalColors"],[13,3,1,"","color_string"]],"helperFunctions.logging.ColoringFormatter":[[13,2,1,"","LOG_LEVEL_COLORS"],[13,5,1,"","format"]],"helperFunctions.logging.TerminalColors":[[13,2,1,"","BLUE"],[13,2,1,"","BOLD"],[13,2,1,"","ENDC"],[13,2,1,"","FAIL"],[13,2,1,"","GREEN"],[13,2,1,"","HEADER"],[13,2,1,"","OKBLUE"],[13,2,1,"","OKGREEN"],[13,2,1,"","PURPLE"],[13,2,1,"","RED"],[13,2,1,"","UNDERLINE"],[13,2,1,"","WARNING"],[13,2,1,"","YELLOW"]],"helperFunctions.merge_generators":[[14,3,1,"","avg"],[14,3,1,"","shuffled"]],"helperFunctions.object_conversion":[[15,3,1,"","create_meta_dict"]],"helperFunctions.pdf":[[16,3,1,"","build_pdf_report"]],"helperFunctions.plugin":[[17,3,1,"","import_plugins"]],"helperFunctions.process":[[18,1,1,"","ExceptionSafeProcess"],[18,3,1,"","check_worker_exceptions"],[18,3,1,"","complete_shutdown"],[18,3,1,"","new_worker_was_started"],[18,3,1,"","start_single_worker"],[18,3,1,"","stop_processes"],[18,3,1,"","terminate_process_and_children"]],"helperFunctions.process.ExceptionSafeProcess":[[18,6,1,"","exception"],[18,5,1,"","run"]],"helperFunctions.program_setup":[[19,3,1,"","get_log_file_for_component"],[19,3,1,"","program_setup"],[19,3,1,"","setup_logging"]],"helperFunctions.tag":[[20,1,1,"","TagColor"]],"helperFunctions.tag.TagColor":[[20,2,1,"","ALL"],[20,2,1,"","BLUE"],[20,2,1,"","DARK"],[20,2,1,"","GRAY"],[20,2,1,"","GREEN"],[20,2,1,"","LIGHT"],[20,2,1,"","LIGHT_BLUE"],[20,2,1,"","ORANGE"],[20,2,1,"","RED"]],"helperFunctions.task_conversion":[[21,3,1,"","check_for_errors"],[21,3,1,"","convert_analysis_task_to_fw_obj"],[21,3,1,"","create_analysis_task"],[21,3,1,"","create_re_analyze_task"],[21,3,1,"","get_file_name_and_binary_from_request"]],"helperFunctions.uid":[[22,3,1,"","create_uid"],[22,3,1,"","is_list_of_uids"],[22,3,1,"","is_uid"]],"helperFunctions.virtual_file_path":[[23,3,1,"","get_base_of_virtual_path"],[23,3,1,"","get_parent_uids_from_virtual_path"],[23,3,1,"","get_top_of_virtual_path"],[23,3,1,"","get_uids_from_virtual_path"],[23,3,1,"","join_virtual_path"],[23,3,1,"","merge_vfp_lists"],[23,3,1,"","split_virtual_path"],[23,3,1,"","update_virtual_file_path"]],"helperFunctions.web_interface":[[24,3,1,"","apply_filters_to_query"],[24,3,1,"","cap_length_of_element"],[24,3,1,"","filter_out_illegal_characters"],[24,3,1,"","format_time"],[24,3,1,"","get_alternating_color_list"],[24,3,1,"","get_color_list"],[24,3,1,"","get_template_as_string"],[24,3,1,"","password_is_legal"]],"helperFunctions.yara_binary_search":[[25,1,1,"","YaraBinarySearchScanner"],[25,3,1,"","get_yara_error"],[25,3,1,"","is_valid_yara_rule_file"]],"helperFunctions.yara_binary_search.YaraBinarySearchScanner":[[25,5,1,"","get_binary_search_result"]],"objects.file":[[27,1,1,"","FileObject"]],"objects.file.FileObject":[[27,5,1,"","add_included_file"],[27,5,1,"","add_virtual_file_path_if_none_exists"],[27,2,1,"","analysis_exception"],[27,2,1,"","analysis_tags"],[27,2,1,"","binary"],[27,2,1,"","comments"],[27,5,1,"","create_binary_from_path"],[27,2,1,"","depth"],[27,2,1,"","file_name"],[27,2,1,"","file_path"],[27,2,1,"","files_included"],[27,5,1,"","get_hid"],[27,5,1,"","get_root_uid"],[27,5,1,"","get_virtual_file_paths"],[27,5,1,"","get_virtual_paths_for_all_uids"],[27,5,1,"","get_virtual_paths_for_one_uid"],[27,2,1,"","list_of_all_included_files"],[27,2,1,"","parent_firmware_uids"],[27,2,1,"","parents"],[27,2,1,"","processed_analysis"],[27,2,1,"","root_uid"],[27,2,1,"","scheduled_analysis"],[27,5,1,"","set_binary"],[27,2,1,"","sha256"],[27,2,1,"","size"],[27,2,1,"","temporary_data"],[27,6,1,"","uid"],[27,2,1,"","virtual_file_path"]],"objects.firmware":[[28,1,1,"","Firmware"]],"objects.firmware.Firmware":[[28,2,1,"","device_class"],[28,2,1,"","device_name"],[28,5,1,"","get_hid"],[28,2,1,"","part"],[28,2,1,"","release_date"],[28,5,1,"","set_binary"],[28,5,1,"","set_part_name"],[28,5,1,"","set_tag"],[28,2,1,"","tags"],[28,2,1,"","vendor"],[28,2,1,"","version"]],"scheduler.analysis":[[30,1,1,"","AnalysisScheduler"]],"scheduler.analysis.AnalysisScheduler":[[30,5,1,"","check_exceptions"],[30,5,1,"","get_combined_analysis_workload"],[30,5,1,"","get_plugin_dict"],[30,5,1,"","get_scheduled_workload"],[30,5,1,"","shutdown"],[30,5,1,"","start_analysis_of_object"],[30,5,1,"","update_analysis_of_object_and_children"],[30,5,1,"","update_analysis_of_single_object"]],"web_interface.rest":[[33,0,0,"-","helper"]],"web_interface.rest.helper":[[33,3,1,"","error_message"],[33,3,1,"","get_boolean_from_request"],[33,3,1,"","get_current_gmt"],[33,3,1,"","get_paging"],[33,3,1,"","get_query"],[33,3,1,"","get_update"],[33,3,1,"","success_message"]],config:[[3,1,1,"","Config"],[3,1,1,"","DataStorage"],[3,1,1,"","Database"],[3,1,1,"","DefaultPlugins"],[3,1,1,"","ExpertSettings"],[3,1,1,"","Logging"],[3,1,1,"","Statistics"],[3,1,1,"","Unpack"],[3,3,1,"","cfg"],[3,3,1,"","configparser_cfg"],[3,3,1,"","load"],[3,3,1,"","parse_comma_separated_list"]],conftest:[[4,3,1,"","analysis_plugin"],[4,3,1,"","cfg_tuple"],[4,3,1,"","patch_cfg"]],helperFunctions:[[6,0,0,"-","compare_sets"],[7,0,0,"-","data_conversion"],[8,0,0,"-","database"],[9,0,0,"-","docker"],[10,0,0,"-","fileSystem"],[11,0,0,"-","hash"],[12,0,0,"-","install"],[13,0,0,"-","logging"],[14,0,0,"-","merge_generators"],[15,0,0,"-","object_conversion"],[16,0,0,"-","pdf"],[17,0,0,"-","plugin"],[18,0,0,"-","process"],[19,0,0,"-","program_setup"],[20,0,0,"-","tag"],[21,0,0,"-","task_conversion"],[22,0,0,"-","uid"],[23,0,0,"-","virtual_file_path"],[24,0,0,"-","web_interface"],[25,0,0,"-","yara_binary_search"]],objects:[[27,0,0,"-","file"],[28,0,0,"-","firmware"]],scheduler:[[30,0,0,"-","analysis"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"],"4":["py","exception","Python exception"],"5":["py","method","Python method"],"6":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:function","4":"py:exception","5":"py:method","6":"py:property"},terms:{"0":[2,4,7,10,18,19,27,30],"00ff00":24,"01":[7,28],"04":1,"0m":13,"1":[4,27,30],"10":[1,3,7,18,24],"18":1,"19":1,"1970":[7,28],"1m":13,"2":[27,30],"200":33,"2015":19,"2019":[1,19],"2048":3,"3":[0,7,19,30],"300":9,"4":[0,1,19],"400":33,"4m":13,"55":24,"60":3,"7":4,"8601":28,"9":1,"91m":13,"92m":13,"93m":13,"94m":13,"95m":13,"boolean":[7,12,30,33],"byte":[1,7,10,21,22,25,27,28],"case":[1,12,18,21],"class":[3,4,8,12,13,18,20,24,25,27,28,30],"default":[4,7,19,27,28,30,33],"do":[1,18],"final":30,"float":[14,18,24,27],"function":[1,3,9,11,18,23,25,27,30,33],"import":[3,11,17,28],"int":[7,9,18,24,30,33],"new":[0,2,6,18,27,30],"public":[19,25],"return":[3,4,6,7,8,9,10,11,12,13,14,16,17,18,19,21,22,23,24,25,27,28,30,33],"switch":2,"true":[6,7,10,12,13,18,22,24,25,27],"try":[1,18,25],"var":28,"while":[27,28],A:[1,6,7,8,9,12,13,14,17,18,19,20,21,23,24,25,27,30],As:27,At:1,FOR:19,For:[1,3,12,16,27,28],If:[1,4,7,9,12,18,19,24,27],In:[1,18,28],Is:[18,30],It:[1,3,27,28],NOT:4,No:[1,30],Not:[27,28],On:12,Or:1,That:27,The:[0,1,3,4,6,7,9,10,11,12,13,14,16,17,18,19,21,23,24,25,27,28,30,33],Then:2,There:[1,12,28],These:10,To:2,With:2,_kt:7,_pydanticconfigextraallow:3,_pydanticconfigextraforbid:3,_t:6,_vt:7,abl:[1,2],about:1,absolut:10,abstractcontextmanag:8,accept:24,access:[3,18],accord:7,achiev:30,acknowledg:0,across:[23,27],activ:1,actual:30,ad:[1,18],add:[24,27,30],add_included_fil:27,add_job:30,add_virtual_file_path_if_none_exist:27,addit:4,addition:[10,27,28],adher:33,administr:12,advanc:28,affect:[4,12],after:[2,3,9,12,13,24,27,30],afterward:[1,12,30],again:1,aggreg:27,ajax_stats_reload_tim:3,aka:23,alia:3,all:[1,2,6,9,12,16,17,18,20,22,23,25,27,28,30],allow:[12,18,25],allow_unsupport:12,almost:1,along:[19,27],alreadi:[3,12,21,24],also:[6,27],altern:24,alwai:[18,27,30],an:[1,3,4,6,10,11,12,14,16,18,19,21,24,25,27,28,30],analys:30,analysi:[0,2,16,18,19,21,27,28,29,33],analysis_d:27,analysis_except:27,analysis_main_schedul:30,analysis_plugin:4,analysis_tag:[27,28],analysis_task:21,analysisbaseplugin:4,analysisplugin:4,analysispluginclass:4,analysisschedul:30,analyst:1,analyz:[1,28,30],ani:[1,3,6,7,13,18,19,21,24,27,30],anymor:2,anystr:[7,22],anyth:7,api:[0,1,30,33],apierror:9,applianc:28,apply_filters_to_queri:24,approach:1,appropri:1,apt:2,apt_install_packag:12,apt_remove_packag:12,apt_update_sourc:12,ar:[1,9,11,12,18,21,22,23,25,27,28,30],arbitrari:[7,27],architectur:1,archiv:[23,27],arg:[3,9,18,19],argpars:19,argument:[4,12,19,27],argumentpars:19,around:4,arrai:[11,14],ask:1,assert:4,assign:28,associ:[27,28],assum:28,attach:30,attribut:28,authent:3,author:[0,27],autom:[0,1],automat:[1,13],avail:1,averag:14,avg:14,awai:1,back:[7,12,27],backend:[18,30],backenddbinterfac:30,bad:33,balanc:30,base:[1,3,8,12,13,16,18,20,21,23,25,27,28,30],base_fw:21,basemodel:3,becaus:[1,12],been:[27,30],befor:[1,11,18,30],begin:24,behavior:24,being:27,belong:27,below:1,between:30,binari:[11,22,27,28],binwalk:1,black:30,block_delai:3,blog:3,blow:1,blue:[13,20,24],board:1,bold:13,bool:[6,7,9,10,12,18,22,24,25,30,33],boot:1,bootload:28,branch:28,bsi:1,bug:1,build:16,build_pdf_report:16,built:30,c:[12,19],cad:12,call:[3,16],callabl:[4,18,30],callback:30,camera:28,can:[1,2,3,4,7,19,23,24,27,28,30],cancel:9,cap:24,cap_length_of_el:24,care:27,carv:27,carver:1,categor:28,caus:[24,25],cent:12,certif:1,cf:27,cfg:[3,4],cfg_default:4,cfg_tupl:4,challeng:0,chang:[1,4,12],charact:24,check:[1,6,10,12,18,21,22,24,25,30],check_distribut:12,check_except:30,check_for_error:21,check_if_command_in_path:12,check_worker_except:18,child:[18,27],child_path:27,children:[18,27,30],clone:12,close:[27,30],cmd:12,code:[0,3,7,11,33],codenam:12,collector:30,colon:7,color:[13,20,24,27,28],color_str:13,coloringformatt:13,combin:[9,23],combine_stderr_stdout:9,come:7,command:[9,12],command_line_opt:19,comment:[12,27],common:23,commun:[1,9],communication_timeout:3,compar:[1,7,18],compare_id:7,compare_set:5,comparison:[0,2,7,19],compat:[13,24],compil:25,complet:[1,2,28],complete_shutdown:18,completedprocess:9,compon:[1,18,19],comput:[11,27],concept:1,conf:2,config:[2,4,10,19,21,25,30],configpars:[3,4,30],configparser_cfg:[3,4],configur:[4,12,21,25,30],connect:8,connected_interfac:8,connectto:8,consid:30,consider:30,consist:[7,23,27],constructor:[4,8],consum:1,contact:0,contain:[1,6,9,12,13,15,16,17,18,19,20,21,22,25,27,28,30,33],content:[21,24,25,27],context:[8,12,18,27,30],contribut:0,convers:7,convert:[7,11,21],convert_analysis_task_to_fw_obj:21,convert_compare_id_to_list:7,convert_str_to_bool:7,convert_time_to_str:7,convert_uid_list_to_compare_id:7,convini:9,copi:[14,19],copyright:19,correspond:[23,28],cover:1,cpu:1,creat:[1,10,15,16,18,19,21,33],create_analysis_task:21,create_binary_from_path:27,create_meta_dict:15,create_re_analyze_task:21,create_uid:22,credenti:1,critic:13,crypto:1,current:[12,18,23,27,30,33],current_analys:30,custom:4,customdbmock:4,cve:1,cwe:1,cycl:27,danger:20,dark:20,data:[2,7,11,21,22,27,28,33],data_convers:5,data_storag:3,databas:[1,2,3,5,21,25,27,28,30],databaseinterfac:8,datastorag:3,datastructur:33,date:[7,28],datefmt:13,datetim:7,db:23,db_interfac:[4,30],dd:28,debian:[1,12],debug:[1,13,27],decid:30,decis:30,def:4,default_plugin:3,defaultplugin:3,defin:[4,13,27,28],depend:[1,2,30,33],deprec:7,depth:27,deriv:4,descript:[19,30],detail:[1,16,19],detect:1,develop:1,devic:[1,24,28],device_class:28,device_nam:28,di:27,dict:[7,21,23,24,25,27,28,30,33],dictionari:[7,15,21,23,28,30,33],differ:[1,20,23,24,27,30],direct:27,directori:[10,12,17,24],disassembl:1,displai:[18,21,24],distinguish:12,distribut:[12,19],distutil:7,dnf_install_packag:12,dnf_remove_packag:12,dnf_update_sourc:12,doc:[4,18],docker:[5,16],docker_mount_base_dir:3,document:1,doe:[2,4,11,12,18],don:[4,12],drone:0,duplic:6,durat:24,dure:[12,18,27,28],e:[6,7,8,10,12,18,22,23,24,27,30],each:[1,6,12,27,28,30],easi:0,effect:[12,30],either:[1,11,12,19,25,27],element:[6,22,23,24],elf:11,els:[7,27],embed:28,empti:[7,10,12,16,28],emul:1,en:4,endc:13,endpoint:33,engin:16,entertain:28,entiti:30,entri:[3,23,30],entrypoint:18,environ:12,epoch:28,equal:1,equival:12,erron:24,error:[9,12,13,21,24,25,27,33],error_messag:[21,33],especi:1,etc:[27,28],even:[19,23],everi:27,exampl:[4,8,12],except:[9,12,18,25,27,30],exceptionsafeprocess:18,execpt:12,execut:[1,9,12,18,30],exist:[1,2,21,23,27,30],exit:12,expect:[4,12],expens:27,expert_set:3,expertset:3,extend:0,extract:[10,27,28,30],extractor:[1,10],fact:[0,1,7,10,12,18,19,21,25,27,28,33],fact_cor:[1,12],fact_extract:10,fact_pdf_report:16,fail:[7,9,12,13,33],fall:[12,27],fals:[6,7,9,10,12,18,22,24,25],fandctool:1,favorit:1,featur:1,feder:1,fedora:12,few:1,field:[21,27],file:[1,3,10,11,12,15,16,21,23,24,25,26,28,30],file_is_empti:10,file_nam:27,file_object:[11,23,27],file_path:[10,27],fileobject:[7,11,15,23,27,28,30],files_includ:27,filesystem:[5,27],filter:[24,28],filter_out_illegal_charact:24,financ:1,find:[2,8,12],finish:[1,30],firmwar:[0,7,8,10,16,19,21,23,25,26,27,30],firmware_file_storage_directori:3,firmware_uid:27,first:[1,2,7,11,27],fit:[4,19],fix:1,fixtur:4,fkie:[1,12,19],flag:33,flask:[21,24],flaw:1,fmt:13,fo:[15,30],focu:[1,25],folder:[16,28],folder_nam:12,follow:[1,4,30],forc:30,form:[21,27,30],format:[1,13,24,28],format_tim:24,formatt:13,found:[1,6,9,12],foundat:19,fraunhof:[1,19],free:19,freeli:28,frequent:28,from:[0,3,4,6,7,8,10,12,13,17,19,21,23,24,27,28,33],frontenddbinterfac:8,fs:[27,28],fs_uid:27,full:27,further:[1,30],furthermor:1,fuzz:1,fw:23,g:[6,7,8,18,22,23,24,30],gener:[6,8,11,16,19,22,27,30],german:1,get:[1,6,7,10,18,23,24,25,27,30,33],get_alternating_color_list:24,get_base_of_virtual_path:23,get_binary_search_result:25,get_boolean_from_request:33,get_color_list:24,get_combined_analysis_workload:30,get_config_dir:10,get_current_gmt:33,get_file_name_and_binary_from_request:21,get_hash:11,get_hid:[27,28],get_imphash:11,get_log_file_for_compon:19,get_md5:11,get_pag:33,get_parent_uids_from_virtual_path:23,get_plugin_dict:30,get_queri:33,get_relative_object_path:10,get_root_uid:27,get_scheduled_workload:30,get_sha256:11,get_shared_sess:8,get_src_dir:10,get_ssdeep:11,get_template_as_str:24,get_template_dir:10,get_tlsh:11,get_tlsh_comparison:11,get_top_of_virtual_path:23,get_uids_from_virtual_path:23,get_upd:33,get_value_of_first_kei:7,get_virtual_file_path:27,get_virtual_paths_for_all_uid:27,get_virtual_paths_for_one_uid:27,get_yara_error:25,ghusernam:12,git:1,github:[1,12],given:[12,16,24,25,27,30],gnu:19,go:1,gracefulli:18,grai:[20,28],green:[13,20,24],group:[18,28],gui:1,guidelin:[1,33],ha:[4,10,27,30],handl:[18,30],happen:[12,18,30],hard:1,hash:[5,24,27,30],hash_funct:11,hash_length:27,hashlib:11,have:[1,2,4,10,12,19,20,27,30],header:13,hear:1,helper:[31,32],helperfunct:28,hesit:1,hex:[11,24],hexadecim:24,hexstr:11,hi:1,hid:[24,27],hid_el:24,hold:[27,28],hope:19,host:[12,27],how:[1,4],howev:1,html:[4,24],http:[4,19,33],human:27,hunt:1,i:[10,12,27],id:7,identif:1,identifi:[1,7,12,21,22,24,27,28,33],illeg:24,imag:[9,23,27,28],imagenotfound:9,immutablemultidict:33,impend:30,impervi:18,imphash:11,implement:[1,16],impli:19,import_plugin:17,improv:1,includ:[12,23,25,27,28,30,33],incorpor:1,increment:27,independ:30,index:[0,18],indic:12,info:[13,20],inform:[1,3,15,27,30,33],inherit:27,ini:3,initi:30,input:[6,7,22],input_data:[7,22],input_dict:7,input_list:22,input_str:22,ins:1,insid:[16,23,27,30],instal:[0,2,5],install_github_project:12,install_pip_packag:12,installationerror:12,instanc:[1,3,4,9,18,28,30],instead:18,integ:[11,33],integr:0,intend:[0,8,21],interact:30,intercom_poll_delai:3,interfac:[7,8,24],intermedi:[10,30],intern:27,introspect:30,investig:1,iot:0,ip:28,is_list_of_uid:22,is_uid:22,is_valid_yara_rule_fil:25,is_virtualenv:12,isinst:4,iso:28,issu:1,item:6,iter:[6,7,12,18,30],iter_element_and_rest:6,its:[12,18,27,28,30],itself:27,jinja2:16,join:18,join_virtual_path:23,json:24,kali:[1,12],kei:[1,7,27],kept:23,kernel:28,keyword:[4,9,12],kind:1,know:1,knowledg:1,known:1,kwarg:[3,9,12,18,28],label:[9,18],later:19,latest:0,latex:16,layer:[1,27],lead:1,leaf:28,least:[1,27],legaci:3,length:[24,27],level:[13,23,27],licens:[1,19],light:20,light_blu:20,like:[1,4,27],limit:[24,33],line:12,link:[4,23],list:[1,6,7,11,12,13,18,20,22,23,24,25,27,30,33],list_:6,list_of_all_included_fil:27,list_str:3,live:[1,30],load:[3,30],local:[1,27],locat:3,log:[3,5,9,12,18],log_current_packag:12,log_level_color:13,logfil:3,logging_label:9,logic:23,login:1,loglevel:3,logrecord:13,look:[1,3,27],lot:[1,27],love:1,lower:27,m:2,machin:27,made:[27,30],mai:[2,3,7,12,18,20,28,30],mail:1,main:1,make:[4,12,18],make_byt:7,make_unicode_str:7,manag:[8,12],mandatori:[28,30],mani:1,manual:1,manufactur:1,map:27,mark:4,marker:4,massiv:1,match:[18,25],materi:1,matter:[1,11],max_depth:3,max_elements_per_chart:3,maximum:24,md5:11,mean:27,memori:27,memory_limit:3,merchant:19,merg:23,merge_gener:5,merge_vfp_list:23,messag:[18,21,25,27,33],meta:[15,27,28,33],metadata:27,method:[4,25],might:[1,24,27,30,33],migrat:2,migrate_db_to_postgresql:2,mime_blacklist:30,mime_whitelist:30,minor:1,mint:12,miss:21,mm:28,modifi:[4,19],modul:[0,3,5,26,30,31,32],mongod:2,mongodb:[2,24,33],monkeypatch:4,more:[1,3,11,19],most:33,mostli:30,much:1,multipl:[1,12,23,27],multiprocess:[18,30],must:[1,3,4,13],my_fancy_plugin:4,my_fancy_test:4,myfancyplugin:4,name:[9,12,18,19,21,24,27,28,30,33],neat:33,necessari:[4,7,12],necessarili:27,need:[1,2,3,4,10,30],never:28,new_process:18,new_vfp:23,new_vfp_list:23,new_worker_was_start:18,newfound:23,next:[1,27],nginx:3,non:12,none:[3,7,13,18,19,21,25,27,28,30,33],none_to_non:7,nonetyp:7,normal:[2,4],normalize_compare_id:7,normalize_lief_item:11,noth:[4,18],notifi:30,now:4,ntp:33,number:[12,24,27],number_of_latest_firmwares_to_displai:3,object:[6,7,10,11,12,13,15,16,20,21,23,24,25,30],object_convers:5,occur:[18,27,30],occurr:27,offer:[30,33],offic:1,offset:[10,33],offset_path:10,ok:33,okblu:13,okgreen:13,old:[2,18,23],old_process:18,old_vfp:23,old_vfp_list:23,onc:[23,30],one:[12,16,23,27],ones:23,onli:[3,6,22,23,25,27,30],open:8,operateindirectori:12,oppos:18,option:[7,12,18,19,21,24,25,27,28,33],orang:20,order:[11,30],org:[2,4,19],origin:1,os:1,other:[6,13,28],otherwis:[6,7,10,18,22,24,25],our:1,out:[1,12,24,30],outer:27,output:[7,13],over:[6,18],overview:16,overwritten:4,own:1,pack:27,packag:12,package_fil:12,packagenam:17,page:[0,16,33],pair:27,param:25,paramet:[3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,27,28,30,33],parent:[23,27],parent_firmware_uid:27,parent_path:27,parent_uid:27,pars:[19,33],parse_comma_separated_list:3,part:[1,27,28],part_nam:28,particular:19,partli:1,pass:[4,8,9,12,28],passwd:28,password:[1,24],password_is_leg:24,password_salt:3,patch:[3,4,23],patch_cfg:4,path:[3,10,12,16,23,24,27,28],pathlib:[10,12,16],pattern:[1,25],pdf:5,per:12,perform:25,persist:27,pictur:1,pip:[2,12],pipe:27,placehold:27,platform:1,pleas:1,plethora:28,plug:[0,1],plugin:[4,5,27,28,30,33],plugin_base_dir:17,plugin_init_kwarg:4,plugin_mount:17,plugin_nam:27,plugin_set:30,plugin_start_work:4,plugin_vers:27,pluginbas:17,pluginsourc:17,point:30,possibl:[1,6],post_analysi:30,postgres_admin_pw:3,postgres_admin_us:3,postgres_databas:3,postgres_del_pw:3,postgres_del_us:3,postgres_port:3,postgres_ro_pw:3,postgres_ro_us:3,postgres_rw_pw:3,postgres_rw_us:3,postgres_serv:3,postgres_test_databas:3,postgresql:2,potenti:1,pre:30,pre_analysi:30,predecessor:27,present:[1,24,27,28,30],preserv:30,preset:28,previou:12,primari:[20,27],print:13,printer:28,privat:1,probabl:27,process:[1,5,30],process_index:18,process_list:18,processed_analysi:27,program:[1,12,19],program_setup:5,progress:30,project:12,project_path:12,propag:[27,28,30],properti:[18,27],provid:[1,3,6,25,28,30],publish:19,pull:1,purpl:13,purpos:[19,27],put:4,pw:24,py:2,pydant:3,pymongo:2,pytest:4,python3:2,python:[7,12,18],qemu:1,queri:[8,24,28,33],question:1,queue:30,radare2_host:3,rais:[9,12,18],raise_error:12,ran:[9,30],re:[1,18],reach:[9,18],read:[3,12,19],read_package_list_from_fil:12,readabl:27,readm:1,readtimeout:9,reason:[3,33],receiv:19,recent:30,recently_finished_analys:30,reconstruct:18,record:13,recurs:[27,30],red:[13,20],redhat:12,redis_fact_db:3,redis_host:3,redis_port:3,redis_test_db:3,redistribut:19,refer:[16,30],regard:30,regist:30,rel:10,relat:[10,27],releas:[2,28],release_d:28,remain:[6,9],remot:12,remov:[2,6,10,12],remove_duplicates_from_list:6,remove_fold:12,render:16,reorder:7,repeat:30,replac:[4,7,23],repositori:1,repres:[11,12,24,27,28,30,33],represent:[27,28],request:[1,4,9,21,24,33],request_data:33,request_paramet:33,requir:[23,28],rerais:18,rerun:2,resid:17,respect:[13,18],respons:[30,33],rest:[0,1,6,30,31],restart:[18,30],restart_work:18,result:[1,2,16,25,27,30,33],result_dict:27,results_per_pag:3,retriev:[10,18,21,33],return_cod:33,returncod:12,rf:12,right:[1,12],risk:1,rm:12,root:[10,23,27,28,30],root_uid:[27,28],router:[0,28],rule:25,rules_fil:25,run:[9,12,18,27,30],run_cmd_with_log:12,run_docker_contain:9,runner:30,runtim:[3,30],s:[1,10,12,27,30],safe:30,said:28,same:[18,23,28],sampl:1,save:28,scan:25,schedul:[18,27],scheduled_analysi:27,scope:30,screenshot:0,script:[1,2],search:[0,1,23,25],searchabl:1,second:[11,18,24],secondari:20,secur:[0,1],see:[1,3,4,11,18,19,28,30],select:[24,30],self:[27,28],semi:7,send:18,separ:[7,23,27,28],seq:14,sequenc:14,servic:1,set:[4,12,18,22,23,25,27,28,30],set_binari:[27,28],set_part_nam:28,set_tag:28,setter:28,setup_log:19,sha256:27,sha256_siz:22,shall:[0,4,11,28,33],share:[1,30],shell:12,shorthand:11,should:[2,4,12,18,19,23,27,30],shown:30,shuffl:[14,30],shutdown:[18,30],side:30,sign:27,signal:18,silent:12,similar:27,simpli:[2,30],sinc:1,singl:[25,27,30],size:[10,27],skip:30,so:[1,7,11,24,27,30],softwar:[1,19],solv:1,some:[1,3,7,10,19,23,27],sort:[7,11],sourc:0,special:28,specif:[27,28,33],specifi:[13,27,28],speedup:1,split_virtual_path:23,squashf:27,src:[2,10],ssdeep_ignor:3,stack:18,stage:30,start:[1,2,4,12,18,28,30],start_analysis_of_object:30,start_single_work:18,start_work:4,state:30,statist:[3,30],statu:[30,33],stderr:[9,12],stdout:9,stop:[13,18],stop_process:18,storag:[8,27],store:[1,21,27,28,30],str:[6,7,9,10,12,13,18,19,21,22,23,24,25,27,28,30,33],string:[6,7,11,13,22,24,25,27,28,33],strtobool:7,structur:27,structural_threshold:3,stub:4,style:[12,13],subclass:13,submodul:1,subprocess:[9,12,18],substr:6,substring_is_in_list:6,substring_list:6,subtyp:18,success:[20,33],success_messag:33,sudo:[2,12],suggest:18,summari:27,supplementari:28,support:[1,12],sure:4,sym:23,symlink:27,system:[0,12,28,33],t:[3,4,12],tag:[5,27,28],tag_nam:27,tagcolor:[20,28],take:27,tar:27,target:33,target_directori:12,targeted_url:33,task:[1,21,25,30],task_convers:5,task_kei:21,technic:16,tell:1,temp_dir_path:3,templat:[10,16,24],temporari:[10,27],temporary_data:27,term:19,termin:[13,18],terminalcolor:13,terminate_process_and_children:18,test:[3,4],text:13,thei:[1,30],themselv:27,therebi:0,therefor:1,thi:[1,2,3,4,9,12,13,18,19,23,25,27,28,30,33],thing:4,this_files_current_vfp:27,thread:[3,30],three:30,through:[12,30],throw_except:3,thu:[23,27],time:[1,7,23,27,28,33],time_obj:7,timeout:[4,9,12,18],timestamp:33,tmp:3,tool:[0,1,16,19],total:27,tough:1,trace:18,track:30,tree:[27,28],trigger:30,tupl:[6,12,13,18,19,21,25,27,33],twitter:1,type:[3,4,6,7,8,9,10,12,13,14,16,18,19,21,22,23,24,25,27,28,30,33],ubuntu:[1,12],uefi:0,ui:[0,27,30],uid:[5,7,21,23,25,27],uid_list:7,unchang:30,under:[1,19],underlin:13,understand:28,undo:4,unexpect:24,uninstal:2,union:[7,12,22,25],uniqu:[6,7,21,22,25,27],unix:[27,28,33],unpack:[1,3,10,18,27,30],unpack_threshold:3,unpack_throttle_limit:3,unpacking_lock:30,until:[18,30],up:[3,27],updat:[12,21,23,24,30,33],update_analysis_of_object_and_children:30,update_analysis_of_single_object:30,update_virtual_file_path:23,upgrad:[0,12],upload:28,url:33,us:[0,2,3,4,7,8,9,11,12,13,18,19,27,28,30,33],user:[28,30],user_databas:3,usual:27,util:[1,7],valid:[13,22,25],valu:[7,12,18,24,25,27,28,30,33],vendor:[24,28],veri:1,version:[1,2,19,27,28,30],vfp:[23,27],view_nam:24,virtual:[12,23,24,27,28],virtual_file_path:[5,27],virtual_path:23,vulner:1,wa:[2,3,7,9,18,24,27],wai:1,want:[1,2,4],warn:[13,20],warranti:19,we:[1,28],web:[0,1,7,24,30],web_interfac:5,webcam:0,webinterfac:21,weird:4,welcom:1,well:1,werkzeug:33,what:18,when:[1,2,3,12],where:1,whether:[9,12,18,24],which:[1,2,4,7,9,11,12,16,24,28],whitelist:[3,30],whole:1,whose:[23,33],why:33,witch:24,with_arg:4,without:[1,19,24,30],word:7,work:[4,12],worker:[4,18],worker_funct:18,worker_label:18,workload:30,would:[1,27],wrapper:33,write:1,www:19,x1b:13,x:4,y:7,yara:25,yara_binary_search:5,yara_rul:25,yarabinarysearchscann:25,ye:30,yellow:[13,24],yet:18,yield:4,you:[1,2,3,4,19,27],your:[1,2,4,19],yyyi:28,zero:12},titles:["About","Challenges","Upgrading FACT from 3 to 4","config","conftest","helperFunctions","helperFunctions.compare_sets module","helperFunctions.data_conversion module","helperFunctions.database module","helperFunctions.docker module","helperFunctions.fileSystem module","helperFunctions.hash module","helperFunctions.install module","helperFunctions.logging module","helperFunctions.merge_generators module","helperFunctions.object_conversion module","helperFunctions.pdf module","helperFunctions.plugin module","helperFunctions.process module","helperFunctions.program_setup module","helperFunctions.tag module","helperFunctions.task_conversion module","helperFunctions.uid module","helperFunctions.virtual_file_path module","helperFunctions.uid web_interface","helperFunctions.yara_binary_search module","objects","objects.file module","objects.firmware module","scheduler","scheduler.analysis","web_interface","web_interface.rest","web_interface.rest.helper module"],titleterms:{"3":2,"4":2,"new":1,about:[0,16],acknowledg:1,affect:1,analysi:[1,30],author:1,challeng:1,code:1,compare_set:6,comparison:1,config:3,conftest:4,contact:1,content:0,contribut:1,data_convers:7,databas:8,docker:9,easi:1,extend:1,extract:1,fact:2,file:27,filesystem:10,find:1,firmwar:[1,28],from:2,hash:11,helper:33,helperfunct:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],imag:1,indic:0,initi:1,instal:[1,12],integr:1,latest:1,log:13,merge_gener:14,modul:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,27,28,33],object:[26,27,28],object_convers:15,other:1,pdf:16,plugin:17,process:18,program_setup:19,report:16,rest:[32,33],schedul:[29,30],screenshot:1,sourc:1,tabl:0,tag:20,task_convers:21,uid:[22,24],upgrad:2,us:1,virtual_file_path:23,web_interfac:[24,31,32,33],yara_binary_search:25}})
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  docs: [
    {
      type: "doc", 
      id: "overview",
      label: "Overview"
    },

    {
      type: "doc", 
      id: "quickstart",
      label: "Quickstart",
      
    },

    {
      type: "category", 
      label: "AWEL(Agentic Workflow Expression Language)",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: "awel/awel"
        },
        {
          type: 'doc',
          id: "awel/get_started"
        },
        {
          type: "doc",
          id: "awel/why_use_awel" 
        },
        {
          type: "category",
          label: "Cookbook",
          items: [
            {
              type: "doc",
              id: "awel/cookbook/quickstart_basic_awel_workflow"
            },
            // {
            //   type: "doc",
            //   id: "awel/cookbook/sql_awel_use_rag_and_schema_linking"
            // },
            // {
            //   type: "doc",
            //   id: "awel/cookbook/data_analysis_use_awel"
            // },
            {
              type: "doc",
              id: "awel/cookbook/multi_round_chat_withllm"
            },
            {
              type:"doc",
              id: "awel/cookbook/first_rag_with_awel"
            },
            {
              type:"doc",
              id: "awel/cookbook/write_your_chat_database"
            }
          ],
          link: {
            type: 'generated-index',
            description: 'Example code for accomplishing common workflow with the Agentic Workflow Expression Language (AWEL). These examples show how to build  different app use LLMs (the core AWEL interface) and dbgpt modules.',
            slug: "awel/cookbook"
          },
        },
        {
          type: "category",
          label: "AWEL Tutorial",
          items: [
            {
              type: "category",
              label: "1. Getting Started",
              collapsed: false,
              collapsible: false,
              items: [
                {
                  type: "doc",
                  id: "awel/awel_tutorial/getting_started/1.1_hello_world"
                },
                {
                  type: "doc",
                  id: "awel/awel_tutorial/getting_started/1.2_how_works"
                },
                {
                  type: "doc",
                  id: "awel/awel_tutorial/getting_started/1.3_custom_operator"
                },
              ]
            },
            {
              type: "category",
              label: "2. Basic Syntax",
              collapsed: false,
              collapsible: false,
              items: [
                {
                  type: "doc",
                    id: "awel/awel_tutorial/basic_syntax/2.1_map_operator"
                },
                {
                  type: "doc",
                  id: "awel/awel_tutorial/basic_syntax/2.2_reduce_operator"
                },
                {
                  type: "doc",
                  id: "awel/awel_tutorial/basic_syntax/2.3_join_operator"
                },
                {
                  type: "doc",
                  id: "awel/awel_tutorial/basic_syntax/2.4_branch_operator"
                },
                {
                    type: "doc",
                    id: "awel/awel_tutorial/basic_syntax/2.5_streamify_operator"
                },
                {
                    type: "doc",
                    id: "awel/awel_tutorial/basic_syntax/2.6_unstreamify_operator"
                },
                {
                  type: "doc",
                  id: "awel/awel_tutorial/basic_syntax/2.7_transform_stream_operator"
                },
                {
                    type: "doc",
                    id: "awel/awel_tutorial/basic_syntax/2.8_input_operator"
                },
              ]
            },
            {
              type: "category",
              label: "3. Network Programming",
              collapsed: false,
              collapsible: false,
              items: [
                {
                  type: "doc",
                  id: "awel/awel_tutorial/network_program/3.1_http_trigger"
                },
                {
                  type: "doc",
                  id: "awel/awel_tutorial/network_program/3.2_http_trigger_get"
                },
                {
                  "type": "doc",
                  "id": "awel/awel_tutorial/network_program/3.3_http_trigger_post"
                },
                {
                  "type": "doc",
                  "id": "awel/awel_tutorial/network_program/3.4_http_trigger_streaming"
                }
              ]
            },
            {
              type: "category",
              label: "4. Advanced Guide",
              collapsed: false,
              collapsible: false,
              items: [
                {
                  type: "doc",
                  id: "awel/awel_tutorial/advanced_guide/4.1_lifecycle"
                }
              ]
            },
          ],
          link: {
            type: 'generated-index',
            description: 'The Agentic Workflow Expression Language (AWEL) tutorial provides a comprehensive introduction to the language, including basic syntax, network programming, and advanced usage. The tutorial is designed to help you get started with AWEL and quickly build your own LLM programs.',
            slug: "awel/tutorial"
          },
        }
      ],
      link: {
        type: 'generated-index',
        description: "AWEL (Agentic Workflow Expression Language) is an intelligent agent workflow expression language specifically designed for the development of large-model applications",
      },
    },

    {
      type: "category",
      label: "Installation",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'installation/sourcecode',
        },
        {
          type: 'doc',
          id: 'installation/docker',
        },
        {
          type: 'doc',
          id: 'installation/docker_compose',
        },
        {
          type: 'category',
          label: 'Model Service Deployment',
          items: [
            {
              type: 'doc',
              id: 'installation/model_service/stand_alone',
            },
            {
              type: 'doc',
              id: 'installation/model_service/cluster',
            },
            {
              type: 'doc',
              id: 'installation/model_service/cluster_ha',
            },
          ],
        },
        {
          type: 'category',
          label: 'Advanced Usage',
          items: [
            {
              type: 'doc',
              id: 'installation/advanced_usage/More_proxyllms',
            },
            {
              type: 'doc',
              id: 'installation/advanced_usage/ollama',
            },
            {
              type: 'doc',
              id: 'installation/advanced_usage/vLLM_inference',
            },
            {
              type: 'doc',
              id: 'installation/advanced_usage/OpenAI_SDK_call',
            },
          ],
        },
      ],
      link: {
        type: 'generated-index',
        description: 'DB-GPT provides a wealth of installation and deployment options, supporting source code deployment, Docker deployment, cluster deployment and other modes. At the same time, it can also be deployed and installed based on the AutoDL image.',
        slug: "installation",
      },
    },

    {
      type: "category",
      label: "Application",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Getting Started Tutorial',
          items: [
            {
              type: 'doc',
              id: 'application/apps/app_explore',
              label: "App Explore"
            },
            {
              type: 'doc',
              id: 'application/apps/app_chat',
              label: "App Chat"
            }, 
            {
              type: 'doc',
              id: 'application/apps/app_manage',
              label: "App Manage"
            }, 
            {
              type: 'doc',
              id: 'application/apps/chat_data',
              label: "Chat Data"
            },
            {
              type: 'doc',
              id: 'application/apps/chat_excel',
              label: "Chat Excel"
            },
            {
              type: 'doc',
              id: 'application/apps/chat_db',
              label: "chat DB"
            },
            {
              type: 'doc',
              id: 'application/apps/chat_knowledge',
              label: "Chat Knowledge Base"
            },
            {
              type: 'doc',
              id: 'application/apps/chat_dashboard',
              label: "Chat Dashboard"
            },{
              type: 'doc',
              id: 'application/apps/chat_financial_report',
            },
          ],
        },
        {
          type: 'doc',
          id: 'application/prompts',
          label: "Prompt"
        },
        {
          type: 'doc',
          id: 'application/llms',
          label: "LLMs"
        }, 
        {
          type: 'doc',
          id: 'application/datasources',
          label: "Datasources"
        }, 
        {
          type: 'doc',
          id: 'application/graph_rag',
          label: "GraphRAG"
        }, 
        {
          type: 'doc',
          id: 'application/awel',
        }, 
        {
          type: 'category',
          label: 'Advanced Tutorial',
          items: [
            {
              type: 'doc',
              id: 'application/advanced_tutorial/rag',
            },
            {
              type: 'doc',
              id: 'application/advanced_tutorial/smmf',
            },
            {
              type: 'doc',
              id: 'application/advanced_tutorial/cli',
            },
            {
              type: 'doc',
              id: 'application/advanced_tutorial/api',
            },
            {
              type: 'doc',
              id: 'application/advanced_tutorial/observability',
            },
            {
              type: 'doc',
              id: 'application/advanced_tutorial/debugging',
            },
          ],
        },
        {
          type: 'category',
          label: 'Fine Tuning Manual',
          items: [
            {
              type: 'doc',
              id: 'application/fine_tuning_manual/text_to_sql',
            },
            {
              type: 'doc',
              id: 'application/fine_tuning_manual/dbgpt_hub',
            },
          ],
        },
      ],
      link: {
        type: 'generated-index',
        slug: "application",
      },
    },

    {
      type: "category",
      label: "API Reference",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'api/introduction'
        },
        {
          type: 'doc',
          id: 'api/chat'
        },
        {
          type: 'doc',
          id: 'api/app'
        },
        {
          type: 'doc',
          id: 'api/flow'
        },
        {
          type: 'doc',
          id: 'api/knowledge'
        },{
          type: 'doc',
          id: 'api/datasource'
        },
      ],
      link: {
        type: 'generated-index',
        slug: "api",
      },
    },

    {
      type: "category",
      label: "Modules",
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'modules/smmf',
        },
        {
          type: 'doc',
          id: 'modules/rag',
        },
        {
          type: 'doc',
          id: 'modules/agent',
        },
        {
          type: 'doc',
          id: 'modules/fine_tuning',
        },
        {
          type: 'doc',
          id: 'modules/eval',
        },
        {
          type: 'doc',
          id: 'modules/connections',
        },
        {
          type: 'doc',
          id: 'modules/visual',
        },
        
      ],
      link: {
        type: 'generated-index',
        slug: "modules",
      },
    },

    {
      type: "category",
      label: "Development Guide",
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Agents',
          items: [
            {
              type: 'doc',
              id: "agents/introduction/introduction"
            },
            {
              type: 'doc',
              id: "agents/introduction/tools"
            },
            {
              type: 'doc',
              id: "agents/introduction/database"
            },
            {
              type: 'doc',
              id: "agents/introduction/planning"
            },
            {
              type: 'doc',
              id: "agents/introduction/conversation"
            },
            {
              type: 'doc',
              id: "agents/introduction/custom_agents"
            },
            {
              type: "category",
              label: "Modules",
              items: [
                {
                  type: "category",
                  label: "Profile",
                  items: [
                    {
                      type: "doc",
                      id: "agents/modules/profile/profile"
                    },
                    {
                      type: "doc",
                      id: "agents/modules/profile/profile_creation"
                    },
                    {
                      type: "doc",
                      id: "agents/modules/profile/profile_to_prompt"
                    },
                    {
                      type: "doc",
                      id: "agents/modules/profile/profile_dynamic"
                    },
                  ]
                },
                {
                  type: "category",
                  label: "Memory",
                  items: [
                    {
                      type: "doc",
                      id: "agents/modules/memory/memory"
                    },
                    {
                      type: "doc",
                      id: "agents/modules/memory/sensory_memory"
                    },
                    {
                      type: "doc",
                      id: "agents/modules/memory/short_term_memory"
                    },
                    {
                      type: "doc",
                      id: "agents/modules/memory/long_term_memory"
                    },
                    {
                      type: "doc",
                      id: "agents/modules/memory/hybrid_memory"
                    },
                  ]
                },
                {
                  type: "category",
                  label: "Plan",
                  items: [
                    {
                      type: "doc",
                      id: "agents/modules/plan/plan"
                    },
                  ]
                },
                {
                  type: "category",
                  label: "Action",
                  items: [
                    {
                      type: "doc",
                      id: "agents/modules/action/action"
                    },
                  ]
                },
                {
                  type: "category",
                  label: "Resource",
                  items: [
                    {
                      type: "doc",
                      id: "agents/modules/resource/resource"
                    },
                    {
                      type: "doc",
                      id: "agents/modules/resource/tools"
                    },
                    {
                      type: "doc",
                      id: "agents/modules/resource/database"
                    },
                    {
                      type: "doc",
                      id: "agents/modules/resource/knowledge"
                    },
                    {
                      type: "doc",
                      id: "agents/modules/resource/pack"
                    },
                  ]
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'RAG',
          items: [
            {
              type: 'doc',
              id: 'cookbook/rag/graph_rag_app_develop',
            },{
              type: 'doc',
              id: 'cookbook/rag/keyword_rag_app_develop',
            },
          ],
        },
        {
          type: 'category',
          label: 'App',
          items: [
            {
              type: 'doc',
              id: 'cookbook/app/data_analysis_app_develop',
            }
          ],
        },
        {
          type: "category",
          label: "dbgpts",
          items: [
            {
              type: "doc",
              id: 'dbgpts/introduction',
            }
          ]
        }
      ],

    },

    {
      type: "category",
      label: "FAQ",
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'faq/install',
        }
        ,{
          type: 'doc',
          id: 'faq/llm',
        }
        ,{
          type: 'doc',
          id: 'faq/kbqa',
        }
      ],
    },
    
    {
      type: "category",
      label: "ChangeLog",
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'changelog/doc',
        },
        {
          type: 'doc',
          id: 'changelog/Released_V0.6.0',
        },
        {
          type: 'doc',
          id: 'changelog/Released_V0.5.0',
        }
      ],
    },

    {
      type: "category",
      label: "Upgrade",
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'upgrade/v0.5.0',
        }, 
        {
          type: 'doc',
          id: 'upgrade/v0.5.1',
        },
        {
          type: 'doc',
          id: 'upgrade/v0.6.0',
        }
      ],
    },

    {
      type: "doc", 
      id: "use_cases",
      label: "Use Cases"
    },
  ]
};


module.exports = sidebars;

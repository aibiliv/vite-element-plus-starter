export default menu = {
  type: 'StandardResult',
  code: '2000',
  success: true,
  data: [
    {
      id: 7792,
      parentId: 0,
      name: '首页',
      url: '/welcome',
      component: '/welcome',
      type: {
        value: 0,
        desc: '目录'
      },
      icon: 'el-icon-house',
      orderNum: 0,
      hidden: false,
      alias: '',
      sort: 0,
      clientId: '',
      permission: '',
      children: [],
      dataType: {}
    },
    {
      id: 7793,
      parentId: 0,
      name: '审批管理',
      url: '/approvalManagement',
      component: '/approvalManagement',
      type: {
        value: 0,
        desc: '目录'
      },
      icon: 'el-icon-set-up',
      orderNum: 10,
      hidden: false,
      alias: '',
      sort: 10,
      clientId: '',
      permission: '',
      children: [
        {
          id: 7799,
          parentId: 7793,
          name: '项目审批',
          url: '/approvalManagement/projectApproval/index',
          component: '/approvalManagement/projectApproval/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-s-platform',
          orderNum: 0,
          hidden: false,
          alias: '',
          sort: 0,
          clientId: '',
          permission: '',
          children: [
            {
              id: 7826,
              parentId: 7799,
              name: '项目审批',
              url: '/approvalManagement/projectApproval/list',
              component: '/approvalManagement/projectApproval/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        },
        {
          id: 8084,
          parentId: 7793,
          name: '合同审批',
          url: '/approvalManagement/contractApproval/index',
          component: '/approvalManagement/contractApproval/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-document-checked',
          orderNum: 0,
          hidden: false,
          alias: '',
          sort: 0,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8096,
              parentId: 8084,
              name: '合同审批',
              url: '/approvalManagement/contractApproval/list',
              component: '/approvalManagement/contractApproval/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        },
        {
          id: 8086,
          parentId: 7793,
          name: '账号审批',
          url: '/approvalManagement/accountApproval/index',
          component: '/approvalManagement/accountApproval/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-user',
          orderNum: 0,
          hidden: false,
          alias: '',
          sort: 0,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8097,
              parentId: 8086,
              name: '账号审批',
              url: '/approvalManagement/accountApproval/list',
              component: '/approvalManagement/accountApproval/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        },
        {
          id: 8088,
          parentId: 7793,
          name: '服务商审批',
          url: '/approvalManagement/agentApproval/index',
          component: '/approvalManagement/agentApproval/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-s-custom',
          orderNum: 0,
          hidden: false,
          alias: '',
          sort: 0,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8098,
              parentId: 8088,
              name: '服务商审批',
              url: '/approvalManagement/agentApproval/list',
              component: '/approvalManagement/agentApproval/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        },
        {
          id: 7922,
          parentId: 7793,
          name: '历史审批',
          url: '/approvalManagement/historyApproval/index',
          component: '/approvalManagement/historyApproval/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-time',
          orderNum: 10,
          hidden: false,
          alias: '',
          sort: 10,
          clientId: '',
          permission: '',
          children: [
            {
              id: 7923,
              parentId: 7922,
              name: '历史审批',
              url: '/approvalManagement/historyApproval/list',
              component: '/approvalManagement/historyApproval/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: 'el-icon-folder-add',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {
            value: 0,
            desc: '全部'
          }
        }
      ],
      dataType: {}
    },
    {
      id: 7794,
      parentId: 0,
      name: '运行监控',
      url: '/operationMonitoring',
      component: '/operationMonitoring',
      type: {
        value: 0,
        desc: '目录'
      },
      icon: 'el-icon-cpu',
      orderNum: 20,
      hidden: false,
      alias: '',
      sort: 20,
      clientId: '',
      permission: '',
      children: [
        {
          id: 7801,
          parentId: 7794,
          name: '项目管理',
          url: '/operationmonitoring/projectManagement/index',
          component: '/operationmonitoring/projectManagement/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-s-operation',
          orderNum: 0,
          hidden: false,
          alias: '',
          sort: 0,
          clientId: '',
          permission: '',
          children: [
            {
              id: 7827,
              parentId: 7801,
              name: '项目管理',
              url: '/operationmonitoring/projectManagement/list',
              component: '/operationmonitoring/projectManagement/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            },
            {
              id: 7834,
              parentId: 7801,
              name: '项目详情',
              url: '/operationmonitoring/projectManagement/detail',
              component: '/operationmonitoring/projectManagement/detail',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 10,
              hidden: true,
              alias: '',
              sort: 10,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {
            value: 0,
            desc: '全部'
          }
        },
        {
          id: 7802,
          parentId: 7794,
          name: '合同管理',
          url: '/operationmonitoring/contractManagement/index',
          component: '/operationmonitoring/contractManagement/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-s-order',
          orderNum: 10,
          hidden: false,
          alias: '',
          sort: 10,
          clientId: '',
          permission: '',
          children: [
            {
              id: 7828,
              parentId: 7802,
              name: '合同管理',
              url: '/operationmonitoring/contractManagement/list',
              component: '/operationmonitoring/contractManagement/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            },
            {
              id: 8102,
              parentId: 7802,
              name: '合同编辑/变更',
              url: '/operationmonitoring/contractManagement/detail',
              component: '/operationmonitoring/contractManagement/detail',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        },
        {
          id: 7924,
          parentId: 7794,
          name: '风险监控',
          url: '/operationmonitoring/riskMonitoring/index',
          component: '/operationmonitoring/riskMonitoring/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-stopwatch',
          orderNum: 20,
          hidden: false,
          alias: '',
          sort: 20,
          clientId: '',
          permission: '',
          children: [
            {
              id: 7925,
              parentId: 7924,
              name: '风险监控',
              url: '/operationmonitoring/riskMonitoring/list',
              component: '/operationmonitoring/riskMonitoring/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: 'el-icon-odometer',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        }
      ],
      dataType: {}
    },
    {
      id: 8079,
      parentId: 0,
      name: '客户管理',
      url: '/customerManagement',
      component: '/customerManagement',
      type: {
        value: 0,
        desc: '目录'
      },
      icon: 'el-icon-phone-outline',
      orderNum: 30,
      hidden: false,
      alias: '',
      sort: 30,
      clientId: '',
      permission: '',
      children: [
        {
          id: 8080,
          parentId: 8079,
          name: '客户资料',
          url: '/customerManagement/customers/index',
          component: '/customerManagement/customers/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-notebook-2',
          orderNum: 0,
          hidden: false,
          alias: '',
          sort: 0,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8081,
              parentId: 8080,
              name: '客户资料',
              url: '/customerManagement/customers/list',
              component: '/customerManagement/customers/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {
            value: 0,
            desc: '全部'
          }
        },
        {
          id: 8082,
          parentId: 8079,
          name: '联系人',
          url: '/customerManagement/contacts/index',
          component: '/customerManagement/contacts/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-phone',
          orderNum: 0,
          hidden: false,
          alias: '',
          sort: 0,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8083,
              parentId: 8082,
              name: '联系人',
              url: '/customerManagement/contacts/list',
              component: '/customerManagement/contacts/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {
            value: 0,
            desc: '全部'
          }
        },
        {
          id: 8090,
          parentId: 8079,
          name: '商机管理',
          url: '/customerManagement/businessManagement/index',
          component: '/customerManagement/businessManagement/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-document-copy',
          orderNum: 0,
          hidden: false,
          alias: '',
          sort: 0,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8099,
              parentId: 8090,
              name: '商机管理',
              url: '/customerManagement/businessManagement/list',
              component: '/customerManagement/businessManagement/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {
            value: 0,
            desc: '全部'
          }
        },
        {
          id: 8092,
          parentId: 8079,
          name: '跟进记录',
          url: '/customerManagement/followupRecords/index',
          component: '/customerManagement/followupRecords/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-edit-outline',
          orderNum: 0,
          hidden: false,
          alias: '',
          sort: 0,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8100,
              parentId: 8092,
              name: '跟进记录',
              url: '/customerManagement/followupRecords/list',
              component: '/customerManagement/followupRecords/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {
            value: 0,
            desc: '全部'
          }
        },
        {
          id: 8094,
          parentId: 8079,
          name: '服务商管理',
          url: '/customerManagement/agentManagement/index',
          component: '/customerManagement/agentManagement/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-s-custom',
          orderNum: 0,
          hidden: false,
          alias: '',
          sort: 0,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8101,
              parentId: 8094,
              name: '服务商管理',
              url: '/customerManagement/agentManagement/list',
              component: '/customerManagement/agentManagement/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        }
      ],
      dataType: {}
    },
    {
      id: 8373,
      parentId: 0,
      name: '运行报表',
      url: '/runReport',
      component: '/runReport',
      type: {
        value: 0,
        desc: '目录'
      },
      icon: 'el-icon-s-operation',
      orderNum: 35,
      hidden: false,
      alias: '',
      sort: 35,
      clientId: '',
      permission: '',
      children: [
        {
          id: 8374,
          parentId: 8373,
          name: '项目基础信息',
          url: '/runReport/basicProjectInformation/index',
          component: '/runReport/basicProjectInformation/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-notebook-2',
          orderNum: 0,
          hidden: false,
          alias: '',
          sort: 0,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8375,
              parentId: 8374,
              name: '项目基础信息',
              url: '/runReport/basicProjectInformation/list',
              component: '/runReport/basicProjectInformation/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        },
        {
          id: 8382,
          parentId: 8373,
          name: '运单明细',
          url: '/runReport/waybillDetails/index',
          component: '/runReport/waybillDetails/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-tickets',
          orderNum: 1,
          hidden: false,
          alias: '',
          sort: 1,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8383,
              parentId: 8382,
              name: '运单明细',
              url: '/runReport/waybillDetails/list',
              component: '/runReport/waybillDetails/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        },
        {
          id: 8380,
          parentId: 8373,
          name: '磅单信息',
          url: '/runReport/poundsInformation/index',
          component: '/runReport/poundsInformation/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-document',
          orderNum: 2,
          hidden: false,
          alias: '',
          sort: 2,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8381,
              parentId: 8380,
              name: '磅单信息',
              url: '/runReport/poundsInformation/list',
              component: '/runReport/poundsInformation/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        },
        {
          id: 8376,
          parentId: 8373,
          name: '开票信息',
          url: '/runReport/billingInformation/index',
          component: '/runReport/billingInformation/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-tickets',
          orderNum: 3,
          hidden: false,
          alias: '',
          sort: 3,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8377,
              parentId: 8376,
              name: '开票信息',
              url: '/runReport/billingInformation/list',
              component: '/runReport/billingInformation/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        },
        {
          id: 8378,
          parentId: 8373,
          name: '运营数据',
          url: '/runReport/operationalData/index',
          component: '/runReport/operationalData/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-document-copy',
          orderNum: 4,
          hidden: false,
          alias: '',
          sort: 4,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8379,
              parentId: 8378,
              name: '运营数据',
              url: '/runReport/operationalData/list',
              component: '/runReport/operationalData/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        }
      ],
      dataType: {}
    },
    {
      id: 7795,
      parentId: 0,
      name: '财务管理',
      url: '/financeManage',
      component: '/financeManage',
      type: {
        value: 0,
        desc: '目录'
      },
      icon: 'el-icon-notebook-2',
      orderNum: 36,
      hidden: false,
      alias: '',
      sort: 36,
      clientId: '',
      permission: '',
      children: [
        {
          id: 7918,
          parentId: 7795,
          name: '项目信息',
          url: '/financialManagement/projectInformation/index',
          component: '/financialManagement/projectInformation/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-tickets',
          orderNum: 0,
          hidden: false,
          alias: '',
          sort: 0,
          clientId: '',
          permission: '',
          children: [
            {
              id: 7919,
              parentId: 7918,
              name: '项目信息',
              url: '/financialManagement/projectInformation/list',
              component: '/financialManagement/projectInformation/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        },
        {
          id: 7920,
          parentId: 7795,
          name: '财务报表',
          url: '/financialManagement/financialStatements/index',
          component: '/financialManagement/financialStatements/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-notebook-2',
          orderNum: 0,
          hidden: false,
          alias: '',
          sort: 0,
          clientId: '',
          permission: '',
          children: [
            {
              id: 7921,
              parentId: 7920,
              name: '财务报表',
              url: '/financialManagement/financialStatements/list',
              component: '/financialManagement/financialStatements/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        },
        {
          id: 8582,
          parentId: 7795,
          name: '项目损益表',
          url: '/financialManagement/projectIncomeStatement/index',
          component: '/financialManagement/projectIncomeStatement/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: '',
          orderNum: 0,
          hidden: false,
          alias: '',
          sort: 0,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8583,
              parentId: 8582,
              name: '项目损益表',
              url: '/financialManagement/projectIncomeStatement/list',
              component: '/financialManagement/projectIncomeStatement/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [
                {
                  id: 8584,
                  parentId: 8583,
                  name: '总表',
                  url: '/financialManagement/projectIncomeStatement/list',
                  component: '',
                  type: {
                    value: 1,
                    desc: '菜单'
                  },
                  icon: '',
                  orderNum: 0,
                  hidden: true,
                  alias: '',
                  sort: 0,
                  clientId: '',
                  permission: '',
                  children: [],
                  dataType: {}
                },
                {
                  id: 8585,
                  parentId: 8583,
                  name: '账款清收表',
                  url: '/financialManagement/projectIncomeStatement/list',
                  component: '',
                  type: {
                    value: 1,
                    desc: '菜单'
                  },
                  icon: '',
                  orderNum: 0,
                  hidden: true,
                  alias: '',
                  sort: 0,
                  clientId: '',
                  permission: '',
                  children: [],
                  dataType: {}
                }
              ],
              dataType: {}
            }
          ],
          dataType: {}
        },
        {
          id: 8518,
          parentId: 7795,
          name: '流水管理',
          url: '/financialManagement/flowManagement/index',
          component: '/financialManagement/flowManagement/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: '',
          orderNum: 1,
          hidden: false,
          alias: '',
          sort: 1,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8519,
              parentId: 8518,
              name: '流水管理',
              url: '/financialManagement/flowManagement/list',
              component: '/financialManagement/flowManagement/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        },
        {
          id: 8520,
          parentId: 7795,
          name: '支付主体调额',
          url: '/financialManagement/adjustment/index',
          component: '/financialManagement/adjustment/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: '',
          orderNum: 1,
          hidden: false,
          alias: '',
          sort: 1,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8521,
              parentId: 8520,
              name: '支付主体调额',
              url: '/financialManagement/adjustment/list',
              component: '/financialManagement/adjustment/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        }
      ],
      dataType: {}
    },
    {
      id: 7796,
      parentId: 0,
      name: '系统配置',
      url: '/systemConfig',
      component: '/systemConfig',
      type: {
        value: 0,
        desc: '目录'
      },
      icon: 'el-icon-s-platform',
      orderNum: 40,
      hidden: false,
      alias: '',
      sort: 40,
      clientId: '',
      permission: '',
      children: [
        {
          id: 7797,
          parentId: 7796,
          name: '用户管理',
          url: '/systemConfig/user/index',
          component: '/systemConfig/user/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-s-custom',
          orderNum: 0,
          hidden: false,
          alias: '',
          sort: 0,
          clientId: '',
          permission: '',
          children: [
            {
              id: 7829,
              parentId: 7797,
              name: '用户管理',
              url: '/systemConfig/user/list',
              component: '/systemConfig/user/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        },
        {
          id: 7909,
          parentId: 7796,
          name: '角色管理',
          url: '/systemConfig/role/index',
          component: '/systemConfig/role/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-user',
          orderNum: 10,
          hidden: false,
          alias: '',
          sort: 10,
          clientId: '',
          permission: '',
          children: [
            {
              id: 7910,
              parentId: 7909,
              name: '角色管理',
              url: '/systemConfig/role/list',
              component: '/systemConfig/role/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        },
        {
          id: 8111,
          parentId: 7796,
          name: '系统设置',
          url: '/systemConfig/systemSetting/index',
          component: '/systemConfig/systemSetting/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-setting',
          orderNum: 20,
          hidden: false,
          alias: '',
          sort: 20,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8112,
              parentId: 8111,
              name: '系统设置',
              url: '/systemConfig/systemSetting/list',
              component: '/systemConfig/systemSetting/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        },
        {
          id: 8371,
          parentId: 7796,
          name: '日志管理',
          url: '/systemConfig/log/index',
          component: '/systemConfig/log/index',
          type: {
            value: 1,
            desc: '菜单'
          },
          icon: 'el-icon-tickets',
          orderNum: 30,
          hidden: false,
          alias: '',
          sort: 30,
          clientId: '',
          permission: '',
          children: [
            {
              id: 8372,
              parentId: 8371,
              name: '日志管理',
              url: '/systemConfig/log/list',
              component: '/systemConfig/log/list',
              type: {
                value: 1,
                desc: '菜单'
              },
              icon: '',
              orderNum: 0,
              hidden: true,
              alias: '',
              sort: 0,
              clientId: '',
              permission: '',
              children: [],
              dataType: {}
            }
          ],
          dataType: {}
        }
      ],
      dataType: {}
    }
  ],
  message: '操作成功',
  traceId: '1572835304449437696',
  extend: 'N/A'
}

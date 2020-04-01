<template>
  <div class="tree-form">
    <form action>
      <div class="row form-group">
        <div class="col-6">
          <label class="label-name">
             <span style="margin-left: -260px;">  Name: </span>
            <input
              class="form-control"
              type="text"
              value
              name="name"
              v-model="newDataNode"
              placeholder="your main category"
            />
          </label>
          <br />
          <p v-if="ifEmpty" style="color: #f00">Enter your main category name</p>
          <button
            class="btn btn-info mb-3 text-uppercase"
            @click.prevent="addNode"
          style="margin-left: -120px;">Add a main category</button><br>
          <button
            class="btn btn-info mb-3 text-uppercase"
            @click.prevent="addNode"
          style="margin-left: -120px;">Add a sub category</button>
          <br />

          <div class="tree" style="margin: 50px;">
            <vue-tree-list
                @click="onClick"
                @change-name="onChangeName"
                @delete-node="onDel"
                @add-node="onAddNode"
                :model="data"
                default-tree-node-name="main category"
                default-leaf-node-name="subcategory"
                v-bind:default-expanded="true"
            >
              <span class="icon" slot="addTreeNodeIcon"><i class="fas fa-plus-circle"></i></span>
              <span class="icon" slot="addLeafNodeIcon">＋</span>
              <span class="icon" slot="editNodeIcon"><i class="fas fa-edit"></i></span>
              <span class="icon" slot="delNodeIcon"><i class="fas fa-trash-alt"></i></span>
              <span class="icon" slot="leafNodeIcon"><i class="fas fa-file"></i></span>
              <span class="icon spclass" slot="treeNodeIcon"><i class="far fa-folder-open"></i></span>
            </vue-tree-list>
          </div>
        </div>
        <div class="col-6" style="margin-top: 60px;">
          <div class="row-form mb-2" v-for="(name, i) in names" :key="i">
            <div class="row">
              <div class="col-3">
                <label>Select a name :</label>
              </div>
              <div class="col-5">
                <input class="form-control" type="text" value name="name" v-model="name.nameField" />
              </div>
              <div class="col-3">
                <select v-model="name.selectLang" class="browser-default custom-select">
                  <option selected disabled>English</option>
                  <option value="en" selected>English</option>
                  <option value="ar">Arabic</option>
                </select>
              </div>
              <div class="col-1">
                <span class="icon-span" @click="deleteRow(i, name)" >
                  <i class="fas fa-minus" style="color: rgb(233, 6, 6);"></i>
                </span>
              </div>
            </div>
          </div>
          <span class="icon-span moh" @click="addNewRow" >
            <i class="fas fa-plus" style="color: rgb(87, 216, 87)"></i>
          </span>
          <div class="row" style="margin-top: 65px;">
              <div class="col-2" style="padding-top: 60px;">
          <label>Description</label>
          </div>
          <div class="col-10">
          <textarea class="form-control" name id cols="30" rows="7"></textarea>
          </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { VueTreeList, Tree, TreeNode } from "vue-tree-list";
export default {
  components: {
    VueTreeList
  },
  data() {
    return {
      names: [
        {
          selectLang: "English",
          nameField: ""
        }
      ],
      newDataNode: "",
      ifEmpty: false,
      newTree: {},
      data: new Tree([
        {
          name: "Clothes",
          id: 1,
          pid: 0,
          dragDisabled: true,
          addTreeNodeDisabled: true,
          addLeafNodeDisabled: true,
          editNodeDisabled: true,
          delNodeDisabled: true,
          children: [
            {
              name: "Men's fashion",
              id: 2,
              isLeaf: true,
              pid: 1
            },
            {
              name: "Women fashion",
              id: 3,
              isLeaf: true,
              pid: 1
            }
          ]
        },
        {
          name: "Accessories",
          id: 3,
          pid: 0,
          children: [
            {
              name: "Men's Accessories ",
              id: 2,
              isLeaf: true,
              pid: 1
            },
            {
              name: "Women Accessories ",
              id: 3,
              isLeaf: true,
              pid: 2
            },
          ]
        },
        {
          name: "More",
          id: 4,
          pid: 0,
          children:[{
              name: "T-shirt ",
              id: 1,
              isLeaf: true,
              pid: 3
            },]
        }
      ])
    };
  },
  methods: {
    addNewRow() {
      this.names.push({
        selectLang: "language",
        nameField: ""
      });
    },
    deleteRow(i) {
      if (i > 0) {
        this.names.splice(i, 1);
      }
    },
    onDel(node) {
      console.log(node);
      node.remove();
    },
    onChangeName (params) {
      console.log(params)
    },
    onAddNode (params) {
      console.log(params)
    },
    onClick (params) {
      console.log(params)
    },
    addNode() {
      var node = new TreeNode({ name: this.newDataNode, isLeaf: false });
      if (!this.data.children) this.data.children = [];
      if (!this.newDataNode) {
        this.ifEmpty = true;
      } else {
        this.data.addChildren(node);
        this.ifEmpsty = false;
        this.newDataNode = "";
      }
    },
    getNewTree() {
      var vm = this;
      function _dfs(oldNode) {
        var newNode = {};
        for (var k in oldNode) {
          if (k !== "children" && k !== "parent") {
            newNode[k] = oldNode[k];
          }
        }
        if (oldNode.children && oldNode.children.length > 0) {
          newNode.children = [];
          for (var i = 0, len = oldNode.children.length; i < len; i++) {
            newNode.children.push(_dfs(oldNode.children[i]));
          }
        }
        return newNode;
      }
      vm.newTree = _dfs(vm.data);
    }
  }
};
</script>

<style>

.tree-form .label-name {
  width: 300px;
}
.tree-form form span.icon-span {
  border: 0.5px solid rgb(233, 6, 6);
  height: 35px;
  width: 35px;
  border-radius: 50%;
  text-align: center;
  display: block;
  margin: auto;
  cursor: pointer;
}
.tree-form form span.moh {
  border: 0.5px solid rgb(87, 216, 87);
  height: 35px;
  width: 35px;
  border-radius: 50%;
  text-align: center;
  display: block;
  margin: auto;
  cursor: pointer;
}
.tree-form form .icon-span:hover {
  background: #ffffff;
  color: #fff;
}
.tree-form form span i {
  line-height: 31px;
}

.tree .icon {
  margin-right: 5px;
  cursor: pointer;
}
.tree .vtl-icon {
  cursor: pointer;
}

.tree-form form span i {
    line-height: 31px;
    color: darkorange;
}
</style>

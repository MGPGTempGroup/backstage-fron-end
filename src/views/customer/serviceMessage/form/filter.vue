<template>
  <div class="user-comment-filter" >
    <el-card body-style="padding: 5px 20px;" shadow="never" >
      <el-collapse v-model="collapseActiveNames">
        <el-collapse-item name="1">
          <template slot="title" >
            <h2 style="margin: 0;" >
              <i class="fa fa-filter" />
              &nbsp;{{ $t('userComment.conditionalFiltering') }}
            </h2>
          </template>
          <el-form :model="filterForm" label-position="top" >
            <el-row :gutter="36" >
              <el-col v-bind="filterFormItemLayoutProps" >
                <el-form-item :label="$t('surname')" >
                  <el-select
                    v-model="filterForm.surname"
                    :placeholder="$t('searchBySurnamePlaceholder')"
                    multiple
                    allow-create
                    remote
                    default-first-option
                    filterable />
                </el-form-item>
              </el-col>
              <el-col v-bind="filterFormItemLayoutProps" >
                <el-form-item :label="$t('userComment.name')" >
                  <el-select
                    v-model="filterForm.name"
                    :placeholder="$t('searchByNamePlaceholder')"
                    multiple
                    allow-create
                    remote
                    default-first-option
                    filterable />
                </el-form-item>
              </el-col>
              <el-col v-bind="filterFormItemLayoutProps" >
                <el-form-item :label="$t('userComment.email')" >
                  <el-select
                    v-model="filterForm.email"
                    :placeholder="$t('searchByEmailPlaceholder')"
                    multiple
                    allow-create
                    remote
                    default-first-option
                    filterable />
                </el-form-item>
              </el-col>
              <el-col v-bind="filterFormItemLayoutProps" >
                <el-form-item :label="$t('userComment.phone')" >
                  <el-select
                    v-model="filterForm.phone"
                    :placeholder="$t('searchByPhonePlaceholder')"
                    multiple
                    allow-create
                    remote
                    default-first-option
                    filterable />
                </el-form-item>
              </el-col>
              <el-col v-bind="filterFormItemLayoutProps" >
                <el-form-item :label="$t('userComment.wechat')" >
                  <el-select
                    v-model="filterForm.wechat"
                    :placeholder="$t('searchByWeChatPlaceholder')"
                    multiple
                    allow-create
                    remote
                    default-first-option
                    filterable />
                </el-form-item>
              </el-col>
              <el-col v-bind="filterFormItemLayoutProps" >
                <el-form-item :label="$t('userComment.identity')" >
                  <customer-identity-select v-model="filterForm.identity" />
                </el-form-item>
              </el-col>
              <el-col v-bind="filterFormItemLayoutProps" >
                <el-form-item :label="$t('userComment.comments')" >
                  <el-select
                    v-model="filterForm.comments"
                    :placeholder="$t('searchByCommentsPlaceholder')"
                    multiple
                    allow-create
                    remote
                    default-first-option
                    filterable/>
                </el-form-item>
              </el-col>
              <el-col v-bind="filterFormItemLayoutProps" >
                <el-form-item :label="$t('userComment.createdAt')" >
                  <el-date-picker
                    v-model="filterForm.created_at_range"
                    :range-separator="$t('to')"
                    :start-placeholder="$t('startDate')"
                    :end-placeholder="$t('endDate')"
                    type="datetimerange"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    align="right" />
                </el-form-item>
              </el-col>
              <el-col v-bind="{ span: 24 }" >
                <el-form-item :label="$t('userComment.comeFrom')" >
                  <el-checkbox v-for="(item,index) in services" :key="index" v-model="currServices" :label="item.id" border>
                    {{ $t(item.name) }}
                  </el-checkbox>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <div class="user-comment-filter__form-actions" >
            <el-button type="info" @click="handleReset" >
              {{ $t('reset') }}
            </el-button>
            &nbsp;&nbsp;
            <el-button type="primary" @click="handleQuery" >
              {{ $t('query') }}
            </el-button>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
import CustomerIdentitySelect from '@/businessComponent/CustomerIdentitySelect'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('serviceMessage')
export default {
  name: 'UserCommentFilter',
  components: {
    CustomerIdentitySelect
  },
  data() {
    return {
      collapseActiveNames: [],
      filterFormItemLayoutProps: { xs: 24, sm: 24, md: 12, lg: 8, xl: 6 }
    }
  },
  computed: {
    ...mapState([
      'filterForm',
      'filterServices',
      'services'
    ]),
    currServices: {
      get() {
        return this.filterServices
      },
      set(val) {
        this.setFilterServices(val)
      }
    }
  },
  methods: {
    ...mapMutations([
      'setFilterServices',
      'setTableLoading',
      'setFilterForm'
    ]),
    ...mapActions([
      'fetchServices',
      'fetchMessages'
    ]),
    handleReset() {
      this.setFilterForm({
        surname: [],
        name: [],
        email: [],
        phone: [],
        wechat: [],
        identity: [],
        comments: [],
        created_at_range: []
      })
    },
    handleQuery() {
      this.setTableLoading(true)
      this.fetchMessages().finally(() => {
        this.setTableLoading(false)
      })
    },
    handleQueryServiceMessages() {
      this.setTableLoading(true)
      this.fetchMessages().finally(() => {
        this.setTableLoading(false)
      })
    }
  }
}
</script>

<style lang="scss" scoped >
  .user-comment-filter {
    &__form-actions {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
    &__select-from {
      padding-top: 15px;
      &-query {
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }
    }
  }
  .el-collapse-item {
    &:first-of-type {
      border-top: none;
    }
    border-top: 1px solid #F0F0F0;
  }
</style>

<style lang="scss" >
  @import '@/styles/filter-form.scss';
</style>


<template>
  <div class="create-rental-housing">
    <el-dialog
      :title="$t('house.createRentalHousingData')"
      :visible.sync="visible"
      fullscreen>
      <h3>{{ $t('house.notFillSomeFieldTips') }}</h3>
      <el-form :inline="false" :model="form" label-position="top" >
        <el-row :gutter="64" >
          <el-col v-bind="formChunkLayoutProp" >
            <!-- 房屋名称 -->
            <el-form-item :label="$t('house.name')">
              <el-input v-model="form.name" />
            </el-form-item>
            <!-- 房屋简短介绍 -->
            <el-form-item :label="$t('house.briefIntroduction')">
              <el-input v-model="form.brief_introduction" />
            </el-form-item>
            <!-- 地区选择 -->
            <el-form-item :label="$t('house.address')" >
              <el-cascader
                :options="areaData"
                v-model="form.address"
                expand-trigger="hover"
                popper-class="address-selector"
                style="width: 100%"
                @change="handleAddressSelect" />
            </el-form-item>
            <!-- 郊区名称 -->
            <el-form-item :label="$t('house.suburbName')">
              <el-input v-model="form.suburb_name" />
            </el-form-item>
            <!-- 邮编 -->
            <el-form-item :label="$t('house.postCode')">
              <el-input v-model="form.post_code" type="number" />
            </el-form-item>
            <!-- 视频嵌入代码 -->
            <el-form-item :label="$t('house.videoEmbeddedCode')">
              <el-input
                :rows="4"
                v-model="form.video_embedded_code"
                type="textarea" />
            </el-form-item>
          </el-col>
          <el-col v-bind="formChunkLayoutProp" >
            <!-- 街道名称 -->
            <el-form-item :label="$t('house.streetName')">
              <el-input v-model="form.street_name" />
            </el-form-item>
            <!-- 街道号码 -->
            <el-form-item :label="$t('house.streetCode')">
              <el-input v-model="form.street_code" />
            </el-form-item>
            <!-- 门牌号 -->
            <el-form-item :label="$t('house.houseNumber')">
              <el-input v-model="form.house_number" />
            </el-form-item>
            <!-- 详细地址 -->
            <el-form-item :label="$t('house.addressDescription')">
              <el-input v-model="form.address_description" />
            </el-form-item>
            <!-- 地图坐标 -->
            <el-form-item :label="$t('house.mapCoordinates')">
              <el-input v-model="form.map_coordinates" />
            </el-form-item>
            <!-- 可用日期 -->
            <el-form-item :label="$t('house.availableDate')" >
              <el-date-picker
                v-model="form.available_date_range"
                :start-placeholder="$t('house.startDate')"
                :end-placeholder="$t('house.endDate')"
                :default-time="['00:00:00', '23:59:59']"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetimerange"/>
            </el-form-item>
            <el-form-item :label="$t('house.upcomingInspectionDatetime')" >
              <multiple-date-picker v-model="form.upcoming_inspection_datetime" />
            </el-form-item>
          </el-col>
          <el-col v-bind="formChunkLayoutProp" >
            <!-- 相关属性：卧室、卫生间、车库、车位数量等... -->
            <el-row>
              <el-col v-bind="{ xs: 24, sm: 12, md: 12, lg: 8, xl: 8 }" >
                <el-form-item :label="$t('house.bedrooms')" >
                  <el-input-number v-model="form.bedrooms" controls-position="right" />
                </el-form-item>
              </el-col>
              <el-col v-bind="{ xs: 24, sm: 12, md: 12, lg: 8, xl: 8 }" >
                <el-form-item :label="$t('house.bathrooms')" >
                  <el-input-number v-model="form.bathrooms" controls-position="right" />
                </el-form-item>
              </el-col>
              <el-col v-bind="{ xs: 24, sm: 12, md: 12, lg: 8, xl: 8 }" >
                <el-form-item :label="$t('house.carSpaces')" >
                  <el-input-number v-model="form.car_spaces" controls-position="right" />
                </el-form-item>
              </el-col>
              <el-col v-bind="{ xs: 24, sm: 12, md: 12, lg: 8, xl: 8 }" >
                <el-form-item :label="$t('house.lockupGarages')" >
                  <el-input-number v-model="form.lockup_garages" controls-position="right" />
                </el-form-item>
              </el-col>
              <el-col v-bind="{ xs:24, sm: 12, md: 12, lg: 8, xl: 8 }" >
                <el-form-item :label="$t('house.floorSpace')" >
                  <el-input v-model="form.floor_space" type="number" style="width: 100px;" />
                  &nbsp;m<sup>2</sup>
                </el-form-item>
              </el-col>
            </el-row>
            <!-- 租金区间 -->
            <el-form-item :label="$t('house.dailyRent')" >
              <el-input v-model="form.per_day_min_price" style="width: 40%;" type="number" >
                <i slot="prefix" class="fa fa-dollar" />
              </el-input>
              &nbsp; ~ &nbsp;
              <el-input v-model="form.per_day_max_price" style="width: 40%;" type="number" >
                <i slot="prefix" class="fa fa-dollar" />
              </el-input>
            </el-form-item>
            <!-- 租金区间 -->
            <el-form-item :label="$t('house.weeklyRent')" >
              <el-input v-model="form.per_week_min_price" style="width: 40%;" type="number" >
                <i slot="prefix" class="fa fa-dollar" />
              </el-input>
              &nbsp; ~ &nbsp;
              <el-input v-model="form.per_week_max_price" style="width: 40%;" type="number" >
                <i slot="prefix" class="fa fa-dollar" />
              </el-input>
            </el-form-item>
            <!-- 租金区间 -->
            <el-form-item :label="$t('house.monthlyRent')" >
              <el-input v-model="form.per_month_min_price" style="width: 40%;" type="number" >
                <i slot="prefix" class="fa fa-dollar" />
              </el-input>
              &nbsp; ~ &nbsp;
              <el-input v-model="form.per_month_max_price" style="width: 40%;" type="number" >
                <i slot="prefix" class="fa fa-dollar" />
              </el-input>
            </el-form-item>
            <el-row :gutter="24" >
              <el-col v-bind="{ xs:24, sm: 24, md: 24, lg: 12, xl: 12 }" >
                <!-- 物主 -->
                <el-form-item :label="$t('house.owner')" >
                  <el-autocomplete
                    v-model="form.owner"
                    :fetch-suggestions="searchOwners"
                    :placeholder="$t('searchAndSelect')"
                    style="width: 100%;"
                    @select="handleOwnerSelect" />
                </el-form-item>
              </el-col>
              <el-col v-bind="{ xs:24, sm: 24, md: 24, lg: 12, xl: 12 }" >
                <!-- 成员代理 -->
                <el-form-item :label="$t('house.agent')" >
                  <el-select
                    v-model="form.agents"
                    :remote-method="searchMembers"
                    :loading="searchMembersLoading"
                    :placeholder="$t('searchAndSelect')"
                    multiple
                    filterable
                    remote
                    reserve-keyword>
                    <el-option
                      v-for="(item, index) in searchedListOfMembers"
                      :key="index"
                      :label="item.lable"
                      :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="24" >
              <el-col v-bind="{ xs: 24, sm: 24, md: 24, lg: 12, xl: 12 }" >
                <!-- 物业类型 -->
                <el-form-item :label="$t('house.propertyTypes')" >
                  <el-select
                    v-model="form.property_type"
                    :placeholder="$t('house.propertyTypes')"
                    multiple >
                    <el-option
                      v-for="(item, index) in availablePropertyType"
                      :key="index"
                      :label="$t(`propertyType.${item.name}`)"
                      :value="item.id" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col v-bind="{ xs: 24, sm: 24, md: 24, lg: 12, xl: 12 }" >
                <!-- 目前状态 -->
                <el-form-item :label="$t('whetherToDisplay')" >
                  <el-select v-model="form.show" :placeholder="$t('house.stateSelectionPlaceholder')">
                    <el-option
                      v-for="item in houseStatus"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="create-rental-housing__details-editor" >
          <p><strong>{{ $t('details') }}</strong></p>
          <tinymce ref="tinymce" v-model="form.details" />
        </div>
        <div class="create-rental-housing__upload-image-wrapper" >
          <p><strong>{{ $t('house.housingPictureUpload') }}</strong></p>
          <upload-image :image-list.sync="imageList" :max-count="10" />
        </div>
        <div class="create-rental-housing__form-actions" >
          <el-button type="info" @click="handleReset" >
            {{ $t('reset') }}
          </el-button>
          <el-button type="primary" @click="handleCreate" >
            {{ $t('create') }}
          </el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import tinymce from '@/components/Tinymce'
import UploadImage from '@/components/UploadImage'
import MultipleDatePicker from '@/components/MultipleDatePicker'

import { parseTime, filterObjEmptyVal } from '@/utils'
import areaDataStorage from '@/utils/areaDataStorage'

import { searchOwnersByFullName } from '@/api/propertyOwner'
import { searchMembersByFullName } from '@/api/company'
import { uploadImage } from '@/api/upload'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('house')
export default {
  name: 'CreateLeaseHouse',
  components: {
    tinymce, UploadImage, MultipleDatePicker
  },
  data() {
    return {
      areaData: areaDataStorage(),
      formChunkLayoutProp: { xs: 24, sm: 24, md: 12, lg: 8, xl: 8 },
      imageList: [],
      form: {
        details: '',
        brief_introduction: '',
        address: [],
        property_type: [],
        available_date_range: [],
        upcoming_inspection_datetime: [],
        agents: [],
        show: 1,
        video_embedded_code: ''
      },
      houseStatus: [
        {
          label: this.$t('show'),
          value: 1
        },
        {
          label: this.$t('hide'),
          value: 0
        }
      ],
      searchedListOfMembers: [],
      searchMembersLoading: false
    }
  },
  computed: {
    ...mapState([
      'availablePropertyType'
    ]),
    visible: {
      get() {
        return this.$store.state.house.leaseCreateDialogVisible
      },
      set(visible) {
        this.setLeaseCreateDialogVisible(visible)
      }
    }
  },
  methods: {
    ...mapMutations([
      'setLeaseCreateDialogVisible'
    ]),
    ...mapActions([
      'createLeaseHouse'
    ]),
    /**
     * 搜索物业业主
     */
    searchOwners(keyWord, callback) {
      searchOwnersByFullName(keyWord).then(res => {
        const owners = res.data.data
        const results = owners.map(item => ({
          value: item.name + ' ' + item.surname,
          id: item.id
        }))
        callback(results)
      }).catch(() => {
        callback([])
      })
    },
    /**
     * 搜索公司成员
     */
    searchMembers(keyWord) {
      this.searchMembersLoading = true
      searchMembersByFullName(keyWord).then(res => {
        const members = res.data.data
        const results = members.map(item => ({
          lable: item.name + ' ' + item.surname,
          value: item.id
        }))
        this.searchedListOfMembers = results
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.searchMembersLoading = false
      })
    },
    handleAddressSelect(val) {
      console.log(val)
    },
    handleOwnerSelect(item) {
      this.form.owner_id = item.id
    },
    /**
     * 租赁房屋创建
     */
    async handleCreate() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })

      // 上传所有图片，返回一个Promises数组
      let imageUrls = []
      const uploadPromises = this.imageList.map(item => {
        console.log(item)
        return new Promise(async(resolve, reject) => {
          try {
            const imgURL = (await uploadImage(item.file)).headers.location
            resolve(imgURL)
          } catch (err) {
            reject()
          }
        })
      })

      // 取得上传的所有url地址
      try {
        imageUrls = await Promise.all(uploadPromises)
      } catch (err) {
        loading.close()
        this.$message({
          type: 'error',
          message: this.$t('uploadFailed')
        })
        return
      }

      // 组装表单参数数据
      const originForm = JSON.parse(JSON.stringify((this.form)))
      let form = {
        ...originForm,
        broadcast_pictures: imageUrls.map((url, index) => ({ url, index }))
      }
      if (Array.isArray(originForm.available_date_range) && originForm.available_date_range.length === 2) {
        form['available_start_date'] = parseTime(originForm.available_date_range[0])
        form['available_end_date'] = parseTime(originForm.available_date_range[1])
      }
      form = filterObjEmptyVal(form) // 清空无效参数

      // 派遣createLeaseHouse Action，进行创建
      try {
        await this.createLeaseHouse(form)
        this.visible = false
        this.$message({
          type: 'success',
          message: this.$t('createSuccess')
        })
        this.handleReset()
      } catch (err) {
        this.$message({
          type: 'error',
          message: this.$t('createFailed')
        })
      } finally {
        loading.close()
      }
    },
    /**
     * 重置表单
     */
    handleReset() {
      this.form = {
        details: '',
        brief_introduction: '',
        address: [],
        agents: [],
        available_date_range: [],
        property_type: [],
        show: 1,
        owner_id: null,
        members: [],
        video_embedded_code: '',
        upcoming_inspection_datetime: []
      }
      this.imageList = []
      this.$refs.tinymce.setContent('')
    }
  }
}
</script>

<style scoped lang="scss" >
  .create-rental-housing {
    &__form-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 35px;
    }
    &__details-editor {
      margin-top: 22px;
    }
  }
</style>

<style lang="scss" >
  .create-rental-housing {
    .el-input__prefix {
      left: 12px;
    }
    .el-select {
      width: 100%;
    }
  }
</style>

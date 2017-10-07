<template>
    <div class="containerx">
        <div v-if="statux">
            <h2>2017年度成都市基层宣传文化干部第一期培训班</h2>
            <h2>签到系统</h2>
            <mu-card>
                <mu-select-field v-model="place" label="所属地（区、市、县）" :errorText="errorText">
                    <mu-menu-item v-for="group in groups" :key="group.code">
                        {{ group.name }}
                    </mu-menu-item>
                </mu-select-field>
                <mu-select-field v-model="name" label="姓名" :errorText="errorText">
                    <mu-menu-item v-for="name in place.names" :key="name">
                        {{ name }}
                    </mu-menu-item>
                </mu-select-field>
                <mu-raised-button label="full Width" fullWidth primary/>
            </mu-card>
        </div>
        <div v-if="!statux">
            <mu-card>
                <p>{{ checkinfo.info }}</p>
                <div class="box-container">
                    <mu-raised-button label="是" *ngIf="!checkinfo.status"  @click="subm()" fullWidth primary/>
                    <mu-raised-button label="否" *ngIf="!checkinfo.status"  @click="reset()" fullWidth primary/>
                    <mu-raised-button label="重试" *ngIf="checkinfo.status"  @click="reset()" fullWidth primary/>    
                </div>
            </mu-card>
        </div>
        <p class="footer">
            <span> 技术支持</span>：网络文化建设工作办公室
        </p>
    </div>
    
</template>
<style scoped>
.containerx{
    display: flex;
    justify-content: center;
    width: 80vw;
    margin: 0 auto;
    height: 95vh;
    align-items: center;
}
.containerx > img{
    border: 0;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
}
.box-container{
    display: flex;
    justify-content: center;
    align-items: center;
}
md-card{
    opacity: .9;
}
.full-width {
    width: 95%;
    margin: 10px;
}

.sink{
    margin-top: 50px;
    width: 95%;
    background: red;
}
.red{
    background: red;
    color: white;
}

h2{
    width: 100%;
    text-align: center;
    color: red;
}
h2:first{
    margin: 10% 0;
}
.btn{
    text-align: center;
    margin: 0 auto;
}
span{
    text-align: center;
}
.footer{
    padding: 0;
    margin: 0;
    height: 5vh;
    text-align: center;
    line-height: 2.5vh;
    color: #333;
    font-size: .8em;
}
.footer span{
    /* color: #eee; */
}
</style>
<script>
import { members } from '../assets/groups'
export default {
    data() {
        return {
            groups : members,
        }
    }
}
</script>


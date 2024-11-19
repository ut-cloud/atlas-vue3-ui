
 <template>
  <div class="g-signin-button">
    <component
      :is="'script'"
      src="https://accounts.google.com/gsi/client"
      async
    />
    <div
      id="g_id_onload"
      data-client_id="117217968091-860v3rogs3qlvmjen4656rbc4n9sefhe.apps.googleusercontent.com"
      data-context="signin"
      data-ux_mode="popup"
      data-callback="googleSignCallBack"
      data-auto_prompt="false"
    ></div>

    <div class="g_id_signin"
         data-type="standard"
         data-shape="pill"
         data-theme="outline"
         data-text="signin_with"
         data-size="large"
         data-logo_alignment="left">
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()
const route = useRoute();
const router = useRouter();

const redirect = ref(undefined);

watch(route, (newRoute) => {
  redirect.value = newRoute.query && newRoute.query.redirect;
}, { immediate: true });
const loginForm = ref({
  grantType: "google",
  credential: ""
});



onMounted(() => {
  // 定义回调函数
  window.googleSignCallBack = (response) => {
    // 处理Google登录返回的响应
    console.log('Google登录成功:', response);
    loginForm.value.credential = response.credential;
    // 这里可以处理登录成功后的逻辑
    // 比如发送credential到后端验证等
    // 调用action的登录方法
    userStore.login(loginForm.value).then(() => {
      const query = route.query;
      const otherQueryParams = Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
      router.push({ path: redirect.value || "/", query: otherQueryParams });
    }).catch(() => {

    });

  }
})
</script>


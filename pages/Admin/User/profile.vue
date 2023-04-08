<template>
    <div>
        <profilebar />
        <section data-bs-version="5.1" class="team2 cid-sqmMeKl3Zp" id="team2-6">
    
    <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(53, 53, 53);">
    </div>
    <div class="container">
        <div class="card">
            <div class="card-wrapper">
                <div class="row align-items-center">
                    <div class="col-12 col-md-4">
                        <div class="image-wrapper">
                            <img src="../../../assets/images/team1.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-md">
                        <div class="card-box">
                            <h5 class="card-title mbr-fonts-style m-0 display-5">
                                <strong>John Smith</strong>
                            </h5>
                            <h6 class="mbr-fonts-style mb-3 display-4">
                                <strong>Programmer</strong><br><strong>Followers</strong><br><strong>Following</strong></h6>
                            <p class="mbr-text mbr-fonts-style display-7">
                                Themes in the Mobirise website builder offer multiple blocks: intros, sliders,
                                galleries, forms, articles, and so on. Start a project and click on the red plus buttons
                                to see the blocks available for your theme.
                            </p>
                            <div class="social-row display-7">
                                <div class="soc-item">
                                    <a href="https://www.facebook.com/Mobirise/" target="_blank">
                                        <span class="mbr-iconfont mbrib-plus"></span>
                                    </a>
                                </div>
                                <div class="soc-item">
                                    <a href="https://twitter.com/mobirise" target="_blank">
                                        <span class="mbr-iconfont mbrib-chat"></span>
                                    </a>
                                </div>
                                
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        <v-card>
            <v-tabs v-model="tab" bg-color="transparent" fixed-tabs center-active>
                <v-tab value="one">Products</v-tab>
                <v-tab value="two">Comments</v-tab>
                <v-tab value="three">Media</v-tab>
                <v-tab value="four">Likes</v-tab>
                <v-tab value="five">Recommendations</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <products />
                    </v-window-item>

                    <v-window-item value="two">
                        <replies />
                    </v-window-item>

                    <v-window-item value="three">
                        <media />
                    </v-window-item>

                    <v-window-item value="four">
                        <likes />
                    </v-window-item>

                    <v-window-item value="five">
                        <recommendations />
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import profilebar from '../../../components/Menus/profilebar.vue'
    import products from '../../../components/Profile/products.vue'
    import replies from '../../../components/Profile/replies.vue'
    import media from '../../../components/Profile/media.vue'
    import likes from '../../../components/Profile/likes.vue'
    import recommendations from './recommendations.vue'
    
    export default {
        components: {
            profilebar,
            products,
            replies,
            media,
            likes,
            recommendations
        },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'My Profile',
    })
</script>
<template>
    <div>
        <header>
            <h1> Imperial Dungeons (Default Layout)</h1>
            <!-- Links and navigation -->
            <nav>
                <ul>
                    <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/contact">Contact</nuxt-link>
                    </li>
                </ul>
            </nav>
        </header>
            <hr/>
            <slot></slot>
    </div>
</template>
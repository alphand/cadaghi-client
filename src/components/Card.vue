<template>
  <div class="card">
    <div class="card_header">
      <slot name="header">
      </slot>
    </div>
    <div class="card_content">
      <slot>
        This is card body content
      </slot>
    </div>
    <div class="card_footer">
      <slot name="footer">
      </slot>
    </div>
  </div>
</template>

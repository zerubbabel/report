var data = [
    {genre: 'Sports', sold: 275},
    {genre: 'Strategy', sold: 115},
    {genre: 'Action', sold: 120},
    {genre: 'Shooter', sold: 350},
    {genre: 'Other', sold: 150},
]; // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
// Step 1: 创建 Chart 对象
var chart = new G2.Chart({
    id: 'c1', // 指定图表容器 ID
    width: 800, // 指定图表宽度
    height: 400 // 指定图表高度
});
// Step 2: 载入数据源
chart.source(data, {
    genre: {
        alias: '游戏种类' // 列定义，定义该属性显示的别名
    },
    sold: {
        alias: '销售量'
    }
});
// Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
chart.interval().position('genre*sold').color('genre')
// Step 4: 渲染图表
chart.render();
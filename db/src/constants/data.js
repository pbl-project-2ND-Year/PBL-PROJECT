import images from "./images"

const data = {
    user: {
        name: 'User',
        img: images.avt
    },
    summary: [
        {
            title: 'Credited',
            subtitle: 'Total money credited',
            value: '$1.000',
            percent: 70
        },
        {
            title: 'Red Category',
            subtitle: 'Most expensive category',
            value: '3000',
            percent: 49
        },
        {
            title: 'Income',
            subtitle: 'Total Income remaining',
            value: '$678',
            percent: 38
        },
        {
            title: 'Budget',
            subtitle: 'Total percent of budget remaining',
            value: '2345',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Revenue',
        value: '$678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '30K',
            title: 'Credited'
        },
        {
            value: '119.876K',
            title: 'Budget'
        },
        {
            value: '1.234K',
            title: 'Red Category'
        },
        {
            value: '$5678',
            title: 'Income'
        }
    ],
    revenueByChannel: [
        {
            title: 'Cat1',
            value: 70
        },
        {
            title: 'Cat2',
            value: 40
        },
        {
            title: 'Cat3',
            value: 60
        },
        {
            title: 'Cat4',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data